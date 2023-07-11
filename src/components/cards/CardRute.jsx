/* eslint-disable react/prop-types */
export default function CardRute({ img, title, price }) {
  return (
    <div className="card shadow-sm daftar-rute">
      <img
        src={`https://travel-1.tokodjbless.my.id/img/${img}`}
        className="card-img-top my-thumbnail"
        alt="Ria Jaya Trans"
      />
      <div className="card-body position-relative p-4">
        <h3 className="fs-5 card-title">{title}</h3>
        <p className="fs-4 card-text fw-bold harga text-light">
          Rp
          {price.toLocaleString("id-ID", {
            styles: "currency",
            currency: "IDR",
          })}
        </p>
        <p className="card-text text-muted">
          Kamu bisa pesan {title} melalui whatsapp
        </p>
        <a
          href="https://api.whatsapp.com/send/?phone=6282183482626&text=Halo+admin+https://dion-zebua.github.io/landing-page-website-travel-mobil-menggunakan-bootstrap/&type=phone_number&app_absent=0"
          target="_blank"
          rel="noreferrer"
          className="btn btn-danger rounded-1 shadow w-100"
        >
          Pesan Sekarang
        </a>
      </div>
    </div>
  );
}
