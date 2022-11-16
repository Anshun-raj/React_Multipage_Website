import React, { Component } from "react";
import "./RecipeDataStyle.css";
import card1 from '../assets/card1.jpg';
import card2 from '../assets/card2.jpg';
import card3 from '../assets/card3.jpg';
import card4 from '../assets/card4.jpg';
import card5 from '../assets/card5.jpg';
import card6 from '../assets/card6.jpg';

class RecipeData extends Component {
    render() {
        return (
            <div className="recipeData">
                <h2>Recipes</h2>
                <div className="recipeDataInfo">
                    <div className="card">
                        <img src={card1} className="cardImg" alt="cardPic" />
                        <h3>{this.props.name1}</h3>
                        <button className="btn">Order</button>
                    </div>
                    <div className="card">
                        <img src={card2} className="cardImg" alt="cardPic" />
                        <h3>{this.props.name2}</h3>
                        <button className="btn">Order</button>
                    </div>
                    <div className="card">
                        <img src={card3} className="cardImg" alt="cardPic" />
                        <h3>{this.props.name3}</h3>
                        <button className="btn">Order</button>
                    </div>
                    <div className="card">
                        <img src={card4} className="cardImg" alt="cardPic" />
                        <h3>{this.props.name4}</h3>
                        <button className="btn">Order</button>
                    </div>
                    <div className="card">
                        <img src={card5} className="cardImg" alt="cardPic" />
                        <h3>{this.props.name5}</h3>
                        <button className="btn">Order</button>
                    </div>
                    <div className="card">
                        <img src={card6} className="cardImg" alt="cardPic" />
                        <h3>{this.props.name6}</h3>
                        <button className="btn">Order</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default RecipeData;