import React from "react";

export default function Card({color, key}){

    return(
        <div className="colorCard" style={{backgroundColor: `rgb(${color[0]}, ${color[1]}, ${color[2]})`}}>
            <p className="card" key={key}> RGB: {color[0]}, {color[1]}, {color[2]} </p>
        </div>
    )

}