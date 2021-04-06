import React from 'react'
import PremadeCard from './PremadeCard'

export default function PremadeDiv({premadePalletes}) {
    
    const displayColors = () => premadePalletes.map(pallete => {
        return <PremadeCard pallete={pallete} key={pallete.id}/>
    })


    return (
        <div className="colors-set">
            {displayColors()}
        </div>
    )
}