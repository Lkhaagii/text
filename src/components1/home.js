import React from "react";
import Button from "./button";
import img1 from "../assets/hereditary-final.jpg";
import img2 from "../assets/huracan.jpg";
import "./home.css";
import Nemsen from "./nemsen";
import './Nemsen.css'
const Home = () => {
  return (
    <>
      <div className="aa">
        <div className="C">
        <Button  img={img2} />
        </div>
        <Button variant="black" text="tettsduvs" img={img1} />
        <Button variant="black" text="tedsduvs" img={img1} />
        <Button variant="black" text="tsudsduvs" img={img1} />
        <Button variant="black" text="tetudsduvs" img={img1} />
        <Button variant="black" text="tetsduvs" img={img1} />
      </div>
      <div className="gg">
        <div className="dd">
          <Button variant="blue" text="tettdsvs" img={img1} />
          <Button variant="blue" text="tettdvk" img={img1} />
          <Button variant="blue" text="tettdsvs" img={img1} />
          <Button variant="blue" text="tettdsys" img={img1} />
        </div>
        <div>
          <Nemsen/>
        </div>
      </div>
      
    </>
  );
};
export default Home;
