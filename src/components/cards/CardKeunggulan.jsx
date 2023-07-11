/* eslint-disable react/prop-types */
const CardKeunggulan = ({ icon, title, text }) => {
  return (
    <div className="col-md-6 col-xl-3 mb-5 mt-3">
      <div className="h-100 rounded-2 bg-body text-center shadow-sm daftar-keunggulan">
        <div className="bg-info-subtle border-5 border-white border d-inline-flex rounded-circle icon-keunggulan">
          <i className={icon}></i>
        </div>
        <div className="px-4 px-md-2 text-keunggulan">
          <h2 className="fs-4">{title}</h2>
          <p className="text-muted">{text}</p>
        </div>
      </div>
    </div>
  );
};
export default CardKeunggulan;
