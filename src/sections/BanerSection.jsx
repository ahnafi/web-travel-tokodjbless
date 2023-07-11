import { useState } from "react";
import { useEffect } from "react";

const BanerSection = () => {
  const [year, setYear] = useState("");
  useEffect(() => {
    let newYear = new Date();
    setYear(newYear.getFullYear());
  }, []);
  return (
    <>
      <section className="container px-4 my-5">
        <div className="px-2 py-5 bg-body-tertiary text-center rounded-3">
          <h1 className="text-body-emphasis display-2">RIA JAYA TRANS</h1>
          <p className="col-lg-6 col-10 mx-auto text-muted">
            Ria Jaya Trans merupakan Agen Travel Reguler Jakarta, tujuan
            Tangerang, Jakarta, Depok, Bogor, Bekasi, dan Cikarang {"("}pulang
            pergi{")"} di tahun <span>{year}</span>
          </p>
          <div className="d-inline-flex gap-3 mb-5">
            <a
              href="#rute"
              className="btn rounded-0 py-2 px-4 btn-info d-flex gap-2 align-items-center my-button"
            >
              Rute & Harga
            </a>
            <a
              href="https://api.whatsapp.com/send/?phone=6282183482626&text=Halo+admin+https://dion-zebua.github.io/landing-page-website-travel-mobil-menggunakan-bootstrap/&type=phone_number&app_absent=0"
              target="_blank"
              rel="noreferrer"
              className="btn rounded-0 py-2 px-4 btn-outline-info d-flex gap-2 align-items-center my-button"
            >
              Pesan
            </a>
          </div>
        </div>
      </section>
      <section className="spasi"></section>
    </>
  );
};
export default BanerSection;
