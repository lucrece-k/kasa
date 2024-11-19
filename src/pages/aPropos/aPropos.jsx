import Banner from "../../components/banner/banner";
import aproposBackground from "../../images/img-banner-a-propos.png";
import "../aPropos/aPropos.scss";
import Collapse from "../../components/collapse/collapse";
import listeApropos from "../../listeApropos.json";

function Apropos() {
  return (
    <div className="ks-main">
      <Banner
        showText={false}
        backgroundImage={aproposBackground}
        filter={0.7}
      />

      <div className="div-info">
        {listeApropos.map((propos, id) => (
          <Collapse key={id} title={propos.title} content={propos.content} />
        ))}
      </div>
    </div>
  );
}

export default Apropos;
