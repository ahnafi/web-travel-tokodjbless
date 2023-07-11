export default function PertanyaanSection() {
  const rute = [
    {
      text: "Travel Jakarta Lampung Pulang Pergi",
    },
    {
      text: "Travel Jakarta Malang Pulang Pergi",
    },
    {
      text: "Travel Jakarta Bandung Pergi",
    },
    {
      text: "Travel Jakarta Indramayu Pergi",
    },
    {
      text: "Travel Jakarta Cikarang Pergi",
    },
    {
      text: "Travel Jakarta Pati Pergi",
    },
  ];
  return (
    <section className="container mb-5 pt-5 px-4" id="pertanyaan">
      <h2 className="fs-1 text-center" id="keunggulan">
        Pertanyaan Dari Pelanggan
      </h2>
      <p className="pb-4 col-lg-8 mx-auto text-center text-muted">
        Lihat apa saja yang sering mereka tanyakan tentang kami.
      </p>
      <div className="accordion row" id="accordionExample">
        <div className="col-md-6">
          <div className="accordion-item">
            <h3 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Apa itu Ria Jaya Trans?
              </button>
            </h3>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>Ria Jaya Trans</strong> merupakan salah satu agen travel
                terbaik di Jakarta dan sekitarnya. Kami memberikan layanan
                travel reguler dengan harga yang relaltif murah.
                <br />
                <br />
                Tidak hanya itu saja, apabila menggunakan layanan dari kami
                dijamin selamat sampai tujuan.
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 mt-3 mt-md-0 d-flex flex-column justify-content-between">
          <div className="col-12">
            <div className="accordion-item">
              <h3 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Melayani Travel Kemana?
                </button>
              </h3>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Kami melayani beberapa rute seperti
                  <ol className="list-group list-group-numbered">
                    {rute.length > 0 &&
                      rute.map((e) => {
                        return (
                          <li key={e.text} className="list-group-item">
                            {e.text}
                          </li>
                        );
                      })}
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 mt-3">
            <div className="accordion-item">
              <h3 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Apakah bisa melakukan pembatalan dan pengembalian dana?
                </button>
              </h3>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Untuk masalah pembatalah keberangkatan pengembalian dana,
                  silahkan hubungi admin
                  <br />
                  <strong className="text-danger text-12px">
                    *syarat dan ketentuan berlaku
                  </strong>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 mt-3">
            <div className="accordion-item">
              <h3 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  Jadwal keberangkatan Kapan?
                </button>
              </h3>
              <div
                id="collapseFour"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Untuk jadwal keberangkatan kami melayani setiap hari, untuk
                  itu silahkan pesan tiket anda kapan pun dan dimana pun melalui
                  whatsapp dan diskusikan jam keberangkatan anda.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
