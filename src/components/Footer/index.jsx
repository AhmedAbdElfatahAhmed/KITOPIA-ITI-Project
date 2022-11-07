import "./Footer.scss";
import footerstrap from "../../assets/images/footer/footerstrap.png"
const Footer = () => {
  return (
    <footer  className="position-relative">
      <figure className="w-100 position-absolute">
      <img className="w-100" src={footerstrap} alt="footerstrap" />
      </figure>
    </footer>
  );
};

export default Footer;
