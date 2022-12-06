import React from "react";
import imgBaixe from "../assets/img/imgcelular.png";

function SectionBaixe() {
  return (
    <>
      <div id="baixe">
        <div id="containerBaixe">
          <h1 id="textBaixe">BAIXE AGORA</h1>
          <h5 id="textApp">
            Baixe o aplicativo da CHATTE e comece a usar hoje mesmo!
          </h5>
          <div class="app-icons">
          <a href="https://apps.apple.com/app/id1551353775">
            <img
              class="apple"
              src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1276560000&h=7e7b68fad19738b5649a1bfb78ff46e9"
              alt="Download on the App Store"
            />
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.stagescycling.stages">
            <img
              class="android"
              alt="Get it on Google Play"
              src="https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png"
            />
          </a>
        </div>
        </div>
     
      </div>
    </>
  );
}

export default SectionBaixe;
