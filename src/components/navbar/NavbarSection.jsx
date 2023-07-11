import logo from "../../assets/img/RIA-JAYA-TRANS.png";
const NavbarSection = () => {
  const link = [
    { text: "Beranda", to: "#" },
    { text: "Keunggulan", to: "#keunggulan" },
    { text: "Rute", to: "#rute" },
    { text: "Galeri", to: "#galeri" },
    { text: "Pertanyaan", to: "#pertanyaan" },
  ];
  return (
    <header>
      <nav className="navbar navbar-expand-lg my-2">
        <div className="container px-4">
          <a
            className="navbar-brand"
            href="https://dion-zebua.github.io/landing-page-website-travel-mobil-menggunakan-bootstrap/"
          >
            <img className="logo-text" src={logo} alt="RIA JAYA TRANS Travel" />
          </a>
          <button
            className="navbar-toggler btn btn-outline-info shadow"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav gap-2 ms-auto my-2 my-lg-0 navbar-nav-scroll menu">
              {link.map((e) => {
                return (
                  <li key={e.text} className="nav-item">
                    <a
                      className="nav-link text-body-tertiary fw-semibold"
                      href={e.to}
                    >
                      {e.text}
                    </a>
                  </li>
                );
              })}
            </ul>
            <a
              className="ms-lg-5 btn btn-outline-info rounded-3 shadow px-4"
              href="https://api.whatsapp.com/send/?phone=6282183482626&text=Halo+admin+https://dion-zebua.github.io/landing-page-website-travel-mobil-menggunakan-bootstrap/&type=phone_number&app_absent=0"
              target="_blank"
              rel="noreferrer"
            >
              Pesan
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default NavbarSection;
