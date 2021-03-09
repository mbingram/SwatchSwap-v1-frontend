import React from "react";
const colorCard = document.querySelector('.colorCard')

export default function Card({color, key}){


    return(
        <div className="colorCard">
            <h2 className="card"> {color[0]}, {color[1]}, {color[2]} </h2>
        </div>
    )

}