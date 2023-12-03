import React from "react";
import Card from "./Components/Card";
import "./App.css";
import Banner from "./Components/images/images.png";
import { useState } from "react";

const data = {
  header: "See description",
  title: "Forett At Bukit Timah",
  address: "70 Anchorvale Crescent · D21",
  project_type: "Condo",
  year: 2021,
  ownership_type: "Freehold",
  psf_min: 2609,
  psf_max: 3043,
  subprice_label: "Prices from $1.99M",
  availabilities_label: "231 units · 1, 2, 3, 4 bedrooms",
  description:
    "Superb 3 bedroom in Sentosa for a very affordable price and a very nearby bus station.",
  phone: "82345678",
  footer:
    "Please call Alex B (CEA No: R0123456) @  82345678 or the owner (83456789) to arrange for a viewing.",
};

data.psf_min = formatCurrency(data.psf_min);
data.psf_max = formatCurrency(data.psf_max);

function formatCurrency(amount) {
  const formattedAmount = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);

  return formattedAmount.replace(/\.00$/, "");
}

function App() {
  const [selected, setSelected] = useState(false);

  const toggle = () => {
    setSelected(!selected);
  };

  return (
    <div className="App">
      <Card imageUrl={Banner} data={data} toggle={toggle} selected={selected} />
    </div>
  );
}

export default App;
