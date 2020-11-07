import React, { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';
import Card from '../components/Card'

export default () => {
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const chevronWidth = 40;
    return (
      <section id="portfolio" className="portfolio">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>New</h2>
            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
          </div>
          <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="200">
            <Card img='assets/img/newevents/180302095559-holi-2018-4.jpg' eventtitle='Find The Color' price='1000'/>
            <Card img='assets/img/newevents/A-Getty-135226346_mu216z.jpg' eventtitle='Celebrate Diwali with Family' price='150'/>
            <Card img='assets/img/newevents/campusplacements.jpg' eventtitle='Campus Placemets For B.Tech Freshers' price='300'/>
          </div>
        </div>
      </section>
    );
  };