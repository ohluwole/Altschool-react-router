import React from "react";
import './About.css'
import pic_1 from '../Desert-Webpage-Img/pic-1.png'
import pic_2 from '../Desert-Webpage-Img/pic-2.png'
import pic_3 from '../Desert-Webpage-Img/pic-3.png'
import pic_4 from '../Desert-Webpage-Img/pic-4.png'

function About() {
  return (
    <div>
      <div>
        <h1>Explore</h1>
      </div>
      <div className="desert-1">
        <div className="west-wrap">
          <h3>Western Desert</h3>
          <img className="west" src={pic_1} alt="western-desert" />
          <p className="details">
            The Western Desert of Egypt is an area of the Sahara that lies west
            of the river Nile, up to the Libyan border, and south from the
            Mediterranean Sea to the border with Sudan. It is named in contrast
            to the Eastern Desert which extends east from the Nile to the Red
            Sea.
          </p>
        </div>
        <div className="al-wrap">
          <h3>Al Bagawat</h3>
          <img className="al" src={pic_2} alt="al-bagawat" />
          <p className="details">
            Located close to other sites in the Kharga Oasis, the Christian
            Cemetery of Al Bagawat is a unique and fairly unknown attraction to
            see in Egypt. Since many people do not know about this, it is not
            crowded and certainly worth seeing.
          </p>
        </div>
      </div>
      <div className="desert-2">
        <div className="pyramid-wrap">
          <h3>Pyramid of Giza</h3>
          <img className="giza" src={pic_3} alt="pyramid-of-giza" />
          <p className="details"> 
            The Great Pyramid of Giza is the largest Egyptian pyramid and the
            tomb of Fourth Dynasty pharaoh Khufu. Built in the early 26th
            century BC during a period of around 27 years, the pyramid is the
            oldest of the Seven Wonders of the Ancient World, and the only one
            to remain largely intact.
          </p>
        </div>
        <div className="kalahari-wrap">
          <h3>Kalahari Desert</h3>
          <img className="kala" src={pic_4} alt="kalahari-desert" />
          <p className="details">
            The Kalahari Desert is a large semi-arid sandy savanna in Southern
            Africa extending for 900,000 square kilometers (350,000 sq mi),
            covering much of Botswana, and parts of Namibia and South Africa.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
