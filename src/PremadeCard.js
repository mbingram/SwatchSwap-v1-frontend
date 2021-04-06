import React from "react";

export default function PremadeCard({pallete, key}){

    function hexToRgb(hex) {
        var bigint = parseInt(hex, 16);
        var r = (bigint >> 16) & 255;
        var g = (bigint >> 8) & 255;
        var b = bigint & 255;
    
        return r + "," + g + "," + b;
    }
    
    const convert = () => {
        return (hexToRgb(pallete));
    }


    return(
        <div className="colorCard" style={{backgroundColor: `#${pallete}`}} key={key}>
            <p>RGB: {convert()} </p>
            <p>Hex: #{pallete} </p>
        </div>
    )

}