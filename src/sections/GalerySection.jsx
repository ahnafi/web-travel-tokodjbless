export default function GalerySection() {
  const a = [1, 2, 3, 4, 5, 6];
  return (
    <section className="bg-body-tertiary py-5" id="galeri">
      <div className="container px-4">
        <h2 className="fs-1 text-center" id="keunggulan">
          Galeri Album
        </h2>
        <p className="pb-4 col-lg-8 mx-auto text-center text-muted">
          Jadilah bagian dari kami dengan menjadi penumpang.
        </p>
        <div className="bg-body rounded-3 p-3 pb-0">
          <div className="row">
            {a.map((a) => {
              return (
                <div key={a} className="col-lg-4 col-md-6 mb-4">
                  <img
                    src="https://dummyimage.com/1600x900/0697aa/0011ff.jpg&text=Ria+Jaya+Trans"
                    alt="Galeri"
                    className="img-fluid my-thumbnail rounded-3"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
