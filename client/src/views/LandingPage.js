import React, { useState, useEffect } from "react";
import axios from "axios";
import PostCard from "../components/PostCard";
import Loading from "../components/Loading";
import Message from "../components/Message";
import NewEvents from "../components/NewEvents";
import UpcomingEvents from "../components/UpcomingEvents";
import TopuserPickEvents from "../components/TopuserPickEvents";

const LandingPage = () => {
  const [state, setState] = useState({ isLoading: true, postsList: [] });

  useEffect(() => {
    (async () => {
      const result = await axios.get("/api/posts");
      const data = await result.data;

      setState({ ...state, postsList: data, isLoading: false });
    })();
  }, []);

  return (
    <>
    <section id="hero" className="d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
              <h1>Unlocking a Compelling Online Event Experience</h1>
              <h2>Host a Successful Virtual Event</h2>
              <div className="d-lg-flex">
                <a href="#about" className="btn-get-started scrollto">Get Started</a>
              </div>
            </div>
              <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="200">
                <img src="assets/img/hero-img.png" className="img-fluid animated" alt=""></img>
              </div>
            </div>
          </div>
      </section>
      <main id="main">
        <section id="cliens" className="cliens section-bg">
          <div className="container">

            <div className="row" data-aos="zoom-in">

              <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                <img src="assets/img/clients/client-1.png" className="img-fluid" alt=""></img>
              </div>

              <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                <img src="assets/img/clients/client-2.png" className="img-fluid" alt=""></img>
              </div>

              <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                <img src="assets/img/clients/client-3.png" className="img-fluid" alt=""></img>
              </div>

              <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                <img src="assets/img/clients/client-4.png" className="img-fluid" alt=""></img>
              </div>

              <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                <img src="assets/img/clients/client-5.png" className="img-fluid" alt=""></img>
              </div>

              <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                <img src="assets/img/clients/client-6.png" className="img-fluid" alt=""></img>
              </div>

            </div>

          </div>
        </section>
        <UpcomingEvents/>
        <NewEvents/>
        <TopuserPickEvents/>
      </main>
    </>
  );
};

export default LandingPage;
