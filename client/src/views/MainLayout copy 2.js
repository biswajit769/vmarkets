import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MainLayout = ({ children }) => {
  return (
    <>
      <div className="main-container">Parent container
        <header className="header-container">
          <div className="logo-container">Logo container</div>
          <nav className="link container"></nav>
        </header>
        <div>Banner Container
          <div>Heading Text</div>
          <div>Big banner image</div>
        </div>
        <div>feature scroller
          <div>Blank space</div>
          <div>Filter container</div>
          <div>Category scroller</div>
        </div>
        <div>upcoming container
          <div>Heading goes here
            <div>Heading</div>
            <div>View ALL</div>
          </div>
          <div> Card parent container
            <div>Event image container</div>
            <div>Event title container</div>
            <div>Event time goes here</div>
            <div>Posted by name parent
              <div>Posted by biswajit</div>
              <div>Ratings</div>
            </div>
            <div>event series  
              <div>green button</div>
              <div>red button</div>
            </div>
          </div>
        </div>
        <div>New container</div>
        <div>Top user picks</div>
        <footer>Footer container
          <div>Zoom logo</div>
          <div>Rest links
            <div>Social media links</div>
            <div>Copy right</div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default MainLayout;
