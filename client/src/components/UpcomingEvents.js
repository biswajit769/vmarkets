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
            <h2>Upcoming</h2>
            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
          </div>
          <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="200">
            <Card img='assets/img/upcoming/0.jpeg' eventtitle='Mumbai Best Selling Book Fair' price='100'/>
            <Card img='assets/img/upcoming/first.jpg' eventtitle='Celebrate Diwali with Family' price='50'/>
            <Card img='assets/img/upcoming/Exhibiton.jpg' eventtitle='Meet The Auther' price='500'/>
          </div>
        </div>
      </section>
    );
  };