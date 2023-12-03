import React, { useState } from "react";
import "./Styling.css";
import Logo from "./images/building.png";

function Card({ imageUrl, data, toggle, selected }) {
  const [visiblePhoneNumber, setVisiblePhoneNumber] = useState(false);

  const handleClickPhoneNumber = () => {
    setVisiblePhoneNumber(!visiblePhoneNumber);
  };

  const visiblePart = visiblePhoneNumber ? data.phone.slice(4, 8) : "XXXX";

  return (
    <div className="content">
      <div class="ribbon">Launching Soon</div>
      <div className="card-container">
        <div className="image-container">
          <img src={imageUrl} alt="" />
        </div>

        <div className="card-content">
          <div className="card-left">
            <img src={Logo} alt="" />
            <div className="title">{data.title}</div>
            <div className="address">{data.address}</div>
          </div>

          <div className="card-right">
            <div className="card-body">
              <div className="psf_min">{data.psf_min} </div>
              <div className="space"> - </div>
              <div className="psf_max">{data.psf_max} psf</div>
            </div>
            <div className="sub_price">{data.subprice_label}</div>
          </div>
        </div>

        <div className="card-details">
          <div className="deets">
            <div className="project_type">{data.project_type}</div>
            <div className="space">·</div>
            <div className="year">{data.year}</div>
            <div className="space">·</div>
            <div className="ownership">{data.ownership_type}</div>
          </div>
          <div className="more-deets">{data.availabilities_label}</div>
        </div>

        <div className="wrapper">
          <div className="list">
            <div className="item">
              <div className="header" onClick={toggle}>
                <p>{data.header}</p>
              </div>

              <div className={selected ? "item show" : "item hide"}>
                <div class="advants">
                  <div>
                    <div>
                      <i class="fa fa-bed"></i>
                      <span>2</span>
                    </div>
                  </div>
                  <div>
                    <div>
                      <i class="fa fa-fw fa-bath"></i>
                      <span>1</span>
                    </div>
                  </div>
                  <div>
                    <div>
                      <i class="fas fa-vector-square"></i>
                      <span>72 m&sup2;</span>
                    </div>
                  </div>
                </div>
                <hr />

                <div className="phone" onClick={handleClickPhoneNumber}>
                  <div className="number">
                    <span>Phone Number</span>
                    <p>
                      {data.phone.slice(0, 4)} {visiblePart}
                    </p>
                  </div>
                </div>

                <div className="details">
                  <p>{data.description}</p>
                  <hr />
                </div>
                <div className="footer">{data.footer}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
