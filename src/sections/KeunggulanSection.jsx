import foto from "../assets/img/travel-ilus.webp";
import CardKeunggulan from "../components/cards/CardKeunggulan";
const KeunggulanSection = () => {
  const cardText = [
    {
      icon: "fa-regular fa-money-bill-1 fa-2xl m-auto text-secondary",
      title: "Murah",
      text: "Kami memberikan harga yang relatif murah dan bersaing dengan agen lain",
    },
    {
      icon: "fa-solid fa-gauge-high fa-2xl m-auto text-secondary",
      title: "Cepat",
      text: "Ingin bepergian dadakan? Kami solusinya, hanya dengan pesan tiket di whatsapp sudah bisa berangkat.",
    },
    {
      icon: "fa-regular fa-id-card fa-2xl m-auto text-secondary",
      title: "Profesional",
      text: "Seluruh driver sangat berpengalaman dan telah memiliki surat izin mengemudi",
    },
    {
      icon: "fa-solid fa-shield-heart fa-2xl m-auto text-secondary",
      title: "Nyaman",
      text: "Kami selalu mengutamakan kenyaman dan keselamatan penumpang selama perjalanan",
    },
  ];
  return (
    <section>
      <div className="container px-4 text-center">
        <img src={foto} alt="ilusi" className="img-fluid" />
      </div>
      <div className="z-n1 bg-info-subtle" id="content-keunggulan">
        <div className="container px-4">
          <div className="spasi-2"></div>
          <h2 className="fs-1 text-center pt-5" id="keunggulan">
            Keunggulan
          </h2>
          <p className="pb-4 col-lg-8 mx-auto text-center text-muted">
            Berikut alasan mengapa anda harus memilih kami jika ingin bepergian.
          </p>
          <div className="row pb-3 pt-3">
            {cardText.map((e) => {
              return (
                <CardKeunggulan
                  key={e.title}
                  icon={e.icon}
                  title={e.title}
                  text={e.text}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
export default KeunggulanSection;
