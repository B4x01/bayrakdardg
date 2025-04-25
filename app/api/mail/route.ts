import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface FormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  website?: string;
  projectType?: string;
  serviceType?: string;
  budget?: string;
  timeline?: string;
  description?: string;
  subject?: string;
  message?: string;
}

const transporter = nodemailer.createTransport({
  host: 'smtp.hostinger.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

function getEmailTemplate(formData: FormData, formType: string) {
  const commonFields = `
    <p><strong>İsim:</strong> ${formData.name}</p>
    <p><strong>E-posta:</strong> ${formData.email}</p>
    ${formData.phone ? `<p><strong>Telefon:</strong> ${formData.phone}</p>` : ''}
    ${formData.company ? `<p><strong>Şirket:</strong> ${formData.company}</p>` : ''}
    ${formData.website ? `<p><strong>Website:</strong> ${formData.website}</p>` : ''}
  `;

  if (formType === 'contact') {
    return `
      <h2>Yeni İletişim Formu</h2>
      ${commonFields}
      <p><strong>Konu:</strong> ${formData.subject}</p>
      <p><strong>Mesaj:</strong> ${formData.message}</p>
    `;
  }

  return `
    <h2>Yeni ${formType} Talebi</h2>
    ${commonFields}
    ${formData.projectType ? `<p><strong>Proje Türü:</strong> ${formData.projectType}</p>` : ''}
    ${formData.serviceType ? `<p><strong>Hizmet Türü:</strong> ${formData.serviceType}</p>` : ''}
    ${formData.budget ? `<p><strong>Bütçe:</strong> ${formData.budget}</p>` : ''}
    ${formData.timeline ? `<p><strong>Zaman Planı:</strong> ${formData.timeline}</p>` : ''}
    ${formData.description ? `<p><strong>Detaylar:</strong> ${formData.description}</p>` : ''}
  `;
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { formType, ...formData } = data;

    if (!formData.name || !formData.email) {
      return NextResponse.json(
        { message: 'İsim ve e-posta alanları zorunludur.' },
        { status: 400 }
      );
    }

    const emailContent = getEmailTemplate(formData, formType);
    const subjectPrefix = formType === 'contact' ? 'İletişim Formu' : `${formType} Talebi`;

    await transporter.sendMail({
      from: `"Site Formu" <${process.env.SMTP_USER}>`,
      to: 'info@bayrakdardijital.com',
      subject: `Yeni ${subjectPrefix}: ${formData.name}`,
      html: emailContent,
    });

    return NextResponse.json({ message: 'Form başarıyla gönderildi.' });
  } catch (error) {
    console.error('SMTP Hatası:', error);
    return NextResponse.json(
      { message: 'Form gönderilirken bir hata oluştu.' },
      { status: 500 }
    );
  }
}