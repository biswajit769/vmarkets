import { checkPropTypes } from 'prop-types';
import React, { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';

export default (props) => {
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const chevronWidth = 40;
    return (
      <>
        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
          <div className="portfolio-img"><img src={props.img} className="img-fluid" alt=""></img></div>
          <div class="portfolio-info">
            <a href="portfolio-details.html" className="bill-detail" title="More Details"><span className="currency-symbol">₹ </span><span className="price">{props.price}</span></a>
          </div>
          <div className="portfolio-detail">
            <div className="portfolio-heading-detail"><h3><a>{props.eventtitle}</a></h3></div>
            <div className="portfolio-time-detail">Sat, Nov 7, 2020 7:00AM (IST)</div>
            <div className="portfolio-host-detail">
              <span className="created-by"><span className="by-symbol">By</span><a href="#">Rakesh Pradhan</a></span>
            </div>
            <div className="portfolio-sellingoutstatus-detail">
              <span className="event-series">Event Series</span>
              <span className="event-dropin">Drop-in</span>
            </div>
          </div>
        </div>
      </>
    );
  };