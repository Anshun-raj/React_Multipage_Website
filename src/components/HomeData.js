import React from 'react';
import "./HomeDataStyle.css";
import Homepic from "../assets/Homepic.jpg";
const HomeData = () => {
  return (
    <div className='homeData'>
        <h2>Foodie Place</h2>
        <div className='homeDataInfo'>
            <div className='homeLeft'>
               <h3>WE PROVIDE THE FOOD THAT ESTABLISH <br/>THE CONNECTION BETWEEN THE <span> HEARTS.</span></h3>
            </div>
            <div className='homeRight'>
                <img src={Homepic} className="homeImg" alt="FoodPic"/>
            </div>
        </div>
    </div>
  )
}

export default HomeData;
