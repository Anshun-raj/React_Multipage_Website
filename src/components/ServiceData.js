import React from 'react';
import './ServiceDataStyle.css';
function ServiceData(props) {
    return (
        <div className='serviceData'>
            <h2>Services</h2>
            <div className='serviceDataInfo'>
                <div className='homeDelivery'>
                    <h3>{props.title1}</h3>
                    <p>After the pandemic,delivery services have flourished and have now become an essential part of everyday functioning. Being an instant or a short term transaction, you need to be able to get in touch with your customers as and when the need arises.</p>
                    <h5><span>Mob. </span> {props.number1}</h5>
                    <h5><span>Web. </span>{props.website1}</h5>
                    <button>More Details</button>
                </div>
                <div className='fromCenter'>
                    <h3>{props.title2}</h3>
                    <p>Order food from the office is one of the safest way.There is no any change to fill cheated by someone because of the direct interaction between the customer and the seller.You get everything that you want in your ordered item.</p>
                    <h5><span>Mob. </span> {props.number2}</h5>
                    <h5><span>Addr. </span>{props.location}</h5>
                    <button>More Details</button>
                </div>
                <div className='journey'>
                    <h3>{props.title3}</h3>
                    <p>Travelling in Indian Railways is the most preferred one.So, if you are a frequent traveler or going on a train journey soon, you can simply order fresh and hygienic food in train without worrying about food availability on your way.</p>
                    <h5><span>Mob. </span> {props.number3}</h5>
                    <h5><span>Web. </span>{props.website3}</h5>
                    <button>More Details</button>
                </div>
            </div>
        </div>
    )
}
export default ServiceData;