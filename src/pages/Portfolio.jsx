import React from "react";
import Hero from "../components/Portfolio/Hero";
import PortfolioPictures from "../components/Portfolio/PortfolioPictures";
import All from "../components/Portfolio/All";

import Sports from "../components/Portfolio/Sports";
import Nature from "../components/Portfolio/Nature";
import Events from "../components/Portfolio/Events";
import PorftolioFooter from "../components/Portfolio/PorftolioFooter";
import Artists from "../components/Portfolio/Artists";
const Portfolio = ({ portolioSelected, setPortfolioSelected }) => {
  return (
    <div>
      <Hero />
      <PortfolioPictures
        portolioSelected={portolioSelected}
        setPortfolioSelected={setPortfolioSelected}
      />
      {portolioSelected === "all" && <All />}
      {portolioSelected === "artists" && <Artists />}
      {portolioSelected === "sports" && <Sports />}
      {portolioSelected === "nature" && <Nature />}
      {portolioSelected === "events" && <Events />}
      <PorftolioFooter />
    </div>
  );
};

export default Portfolio;
