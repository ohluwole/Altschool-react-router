import React from "react";
import './Home.css'

function Home() {
  return (
    <div className="row">
      <div className="sahara">
        <div className="col">
          <h1>Sahara</h1>
          <p>
            Welcome to the Desert.Enjoy your stay and take part in our luxurious
            packages. We have different activities you can partake of as a group
            and individually. Explore Sahara your way by selecting only the
            attractions you want to visit
          </p>
          <button type="button" className="button">
            Explore
          </button>
        </div>
        <div>
          <div>
            <div className="card card1">
              <h5>Western Desert</h5>
            </div>
            <div className="card card2">
              <h5>AI Bagawat</h5>
            </div>
          </div>
          <div>
            <div className="card card3">
              <h5>Pyramid of Giza</h5>
            </div>
            <div className="card card4">
              <h5>Kalahari Desert</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
