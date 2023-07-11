import { useState } from "react";
import { useEffect } from "react";
import { getData } from "../services/services";
import CardRute from "../components/cards/CardRute";

function RuteDanHarga() {
  const [rute, setRute] = useState([]);
  useEffect(() => {
    getData((data) => {
      setRute(data);
    });
  }, []);
  return (
    <section className="container px-4 pt-5" id="rute">
      <h2 className="fs-1 text-center" id="keunggulan">
        Rute Travel
      </h2>
      <p className="pb-4 col-lg-8 mx-auto text-center text-muted">
        Kami melayani rute untuk luar kota dengan harga yang relatif murah, ayo
        pesan sekarang!
      </p>
      <div className="row">
        {rute.length > 0 &&
          rute.map((e) => {
            return (
              <div key={e.img} className="col-lg-4 col-md-6 mb-5">
                <CardRute img={e.img} title={e.judul} price={e.harga} />
              </div>
            );
          })}
      </div>
    </section>
  );
}
export default RuteDanHarga;
