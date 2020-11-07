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
            <h2>Top User Picks</h2>
            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
          </div>
          <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="200">
            <Card img='assets/img/topuserpicks/maxresdefault.png' eventtitle='Reality Show Audition' price='1000'/>
            <Card img='assets/img/topuserpicks/second.jpg' eventtitle='Traing For Better Parenting' price='250'/>
            <Card img='assets/img/topuserpicks/teamcelebs.jpg' eventtitle='Meet The Author' price='500'/>
          </div>
        </div>
      </section>
    );
  };