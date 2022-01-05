import './mapLocation.css';

const MapLocation = () => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15949.160083614046!2d-79.90684746384919!3d-2.0398501320500584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x902d123e9d604725%3A0xa6884766a1dfc3a4!2sUrb.%20Villa%20Club!5e0!3m2!1sen!2sec!4v1638505280211!5m2!1sen!2sec"
      width="800"
      height="600"
      allowFullScreen=""
      loading="lazy"
      title="ubicacion"
      id="mapLocation"
    ></iframe>
  );
};

export default MapLocation;
