import React from "react";
import "./index.css";
import Image from "./Images";

function Card(props) {
    return (
        <>
            <div className="Card">
                <Image imgsrc={props.imgsrc}/> 
                <div className="Card-info">
                    <h3 className="Vdo-name">{props.title}</h3>
                    <a href={props.link} target="_blank">
                        <button className="btn">Watch Now 💻</button>
                    </a>
                </div>
            </div>

        </>
    )
}

export default Card;

