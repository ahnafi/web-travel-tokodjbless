import foto from "../../assets/img/RIA-JAYA-TRANS.png";
export default function FooterSection() {
  const link = [
    { text: "Beranda", to: "#" },
    { text: "Keunggulan", to: "#keunggulan" },
    { text: "Rute", to: "#rute" },
    { text: "Galeri", to: "#galeri" },
    { text: "Pertanyaan", to: "#pertanyaan" },
  ];
  return (
    <footer>
      <div className="bg-black">
        <div className="container px-4">
          <div>
            <a
              href="https://api.whatsapp.com/send/?phone=6282183482626&text=Halo+admin+https://dion-zebua.github.io/landing-page-website-travel-mobil-menggunakan-bootstrap/&type=phone_number&app_absent=0"
              target="_blank"
              rel="noreferrer"
              id="whatsapp-button"
            >
              <i className="fa-brands fa-whatsapp fa-fade text-light fa-2xl"></i>
            </a>
            <div className="row py-4">
              <div className="col-md-5 mb-3 pe-5">
                <a
                  className="navbar-brand"
                  href="https://dion-zebua.github.io/landing-page-website-travel-mobil-menggunakan-bootstrap/"
                >
                  <img
                    className="logo-text"
                    src={foto}
                    alt="RIA JAYA TRANS Travel"
                  />
                </a>
                <p className="mt-3 text-white-50 text-14px">
                  Ria Jaya Trans merupakan Agen Travel Terbaik di Jakarta pada
                  tahun <span className="year"></span>
                </p>
              </div>

              <div className="col-md-3 mb-3 ps-md-4">
                <h5 className="text-white fs-6">Bagian</h5>
                <ul className="nav flex-column text-14px">
                  {link.length > 0 &&
                    link.map((e) => {
                      return (
                        <li key={e.to} className="nav-item mb-2">
                          <a href={e.to} className="nav-link p-0 text-white-50">
                            {e.text}
                          </a>
                        </li>
                      );
                    })}
                </ul>
              </div>

              <div className="col-md-4 mb-3">
                <h5 className="text-white fs-6">Hubungi Kami</h5>
                <ul className="nav flex-column text-14px">
                  <li className="nav-item mb-2">
                    <a
                      href="https://api.whatsapp.com/send/?phone=6282183482626&text=Halo+admin+https://dion-zebua.github.io/landing-page-website-travel-mobil-menggunakan-bootstrap/&type=phone_number&app_absent=0"
                      target="_blank"
                      rel="noreferrer"
                      className="nav-link p-0 text-white-50"
                    >
                      <i className="fa-solid fa-square-phone text-secondary fa-lg me-2"></i>
                      +62 821-8348-2626
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a
                      href="tel:6282183482626"
                      target="_blank"
                      rel="noreferrer"
                      className="nav-link p-0 text-white-50"
                    >
                      <i className="fa-brands fa-square-whatsapp text-secondary fa-lg me-2"></i>
                      +62 821-8348-2626
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a
                      href="mailto:juliandasaputra121@gmail.com"
                      target="_blank"
                      rel="noreferrer"
                      className="nav-link mail p-0 text-white-50"
                    >
                      <i className="fa-solid fa-envelope text-secondary fa-lg me-2"></i>
                      juliandasaputra121@gmail.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container px-4">
        <div className="d-flex flex-wrap justify-content-between align-items-center pb-3 pt-1 my-2">
          <p className="col-md-6 col-12 mb-0 text-center text-md-start text-secondary">
            © <span className="year"></span>
            <a
              href="https://dion-zebua.github.io/landing-page-website-travel-mobil-menggunakan-bootstrap/"
              className="text-info text-decoration-none"
            >
              Ria Jaya Trans
            </a>
          </p>
          <p className="col-md-6 col-12 mb-0 text-center text-md-end text-secondary">
            Publish by
            <a
              className="text-info text-decoration-none"
              href="https://tokodjbless.com"
            >
              Toko DJbless
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
