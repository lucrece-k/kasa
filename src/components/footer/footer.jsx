import "../footer/footer.scss";
import lettreKkasa from "../../assets/lettre-k-kasa.png";
import maisonKasa from "../../assets/maison-kasa.png";
import lettreSkasa from "../../assets/lettre-s-kasa.png";
import lettreAkasa from "../../assets/lettre-a-kasa.png";
function Footer() {
  return (
    <div className="ks-footer">
      <div className="footer-logo">
        <img src={lettreKkasa} alt="lettre k " />
        <img className="lettre" src={maisonKasa} alt="maison kasa" />
        <img className="lettre" src={lettreSkasa} alt="lettre s " />
        <img className="lettre" src={lettreAkasa} alt="lettre a" />
      </div>
      <p>
        © 2020 Kasa. All
        <br className="break" /> rights reserved
      </p>
    </div>
  );
}
export default Footer;
