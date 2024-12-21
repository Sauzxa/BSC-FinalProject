import { useState } from "react";
import React from "react";
import "./Cards.css";
import { cardsData } from "../../Data/Data";

import Card from "../Card/Card";
import Form from "../Form/Form";
const Cards = () => {
  const [bool,setBool] = useState(false)
  function handleClick(){
setBool(true);
  }
  function handleClick2(){
    setBool(true);
      }
  return ( <>
{bool?<Form handleClick={handleClick2}/>:undefined}
    <div className="Cards">
      {cardsData.map((card, id) => {
        return (
          <div className="parentContainer" key={id}>
            <Card
              title={card.title}
              color={card.color}
              barValue={card.barValue}
              value={card.value}
              png={card.png}
              series={card.series}
              img={card.img}
              Status={card.Status}
            />
         
          </div>
        );
      })}
       
    </div>
  
    <button className="addCard" onClick={handleClick}>Add Card</button>
   
    </>
  );
};

export default Cards;
