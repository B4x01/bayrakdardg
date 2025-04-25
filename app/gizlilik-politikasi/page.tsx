export default function PrivacyPolicyPage() {
  return (
    <div className="container py-16 md:py-24">
      <div className="max-w-3xl mx-auto fade-in-up">
        <h1 className="text-4xl font-bold mb-8">Gizlilik Politikası</h1>

        <div className="prose prose-lg dark:prose-invert">
          <p>
            Bayrakdar Dijital olarak, gizliliğinize saygı duyuyor ve
            verilerinizi korumaya önem veriyoruz. Bu gizlilik politikası, web
            sitemizi kullanırken toplanan bilgilerin nasıl kullanıldığını
            açıklar.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            Toplanan Bilgiler
          </h2>
          <p>
            Web sitemizi ziyaret ettiğinizde, aşağıdaki bilgileri
            toplayabiliriz:
          </p>
          <ul className="list-disc ml-6 mb-6">
            <li>İsim ve iletişim bilgileri</li>
            <li>E-posta adresi</li>
            <li>Telefon numarası</li>
            <li>İnternet protokol (IP) adresi</li>
            <li>Tarayıcı türü ve dili</li>
            <li>Ziyaret edilen sayfalar</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            Bilgilerin Kullanımı
          </h2>
          <p>Topladığımız bilgileri aşağıdaki amaçlar için kullanıyoruz:</p>
          <ul className="list-disc ml-6 mb-6">
            <li>Hizmetlerimizi sunmak ve iyileştirmek</li>
            <li>İletişim taleplerinize yanıt vermek</li>
            <li>Size özel teklifler ve güncellemeler göndermek</li>
            <li>Web sitemizi analiz etmek ve geliştirmek</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Bilgi Güvenliği</h2>
          <p>
            Verilerinizin güvenliğini sağlamak için uygun teknik ve
            organizasyonel önlemler alıyoruz. Ancak, internet üzerinden veri
            iletiminin %100 güvenli olmadığını unutmayın.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Çerezler</h2>
          <p>
            Web sitemiz, deneyiminizi iyileştirmek için çerezler kullanır.
            Tarayıcı ayarlarınızdan çerezleri devre dışı bırakabilirsiniz, ancak
            bu durumda web sitemizin bazı özellikleri düzgün çalışmayabilir.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">İletişim</h2>
          <p>
            Bu gizlilik politikası hakkında sorularınız varsa, lütfen bizimle
            iletişime geçin:
          </p>
          <p>
            E-posta: info@bayrakdardijital.com
            <br />
            Telefon: +90 536 606 52 17
          </p>
        </div>
      </div>
    </div>
  );
}
