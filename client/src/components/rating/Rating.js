import React, { useState } from "react";
import { Star } from "./Star"
import { EmptyStar } from "./EmptyStar";
import { HalfStar } from "./HalfStar";

import "./Star.css"
//import { HalfStar } from "./HalfStar";
// Import your empty and filled stars

const STAR_COUNT = 5;

export const Rating = ({ value }) => {
    const stars = Array.from({length: STAR_COUNT}, () => <EmptyStar />);
    let i;
    for (i = 0; i < value; i++) {
        stars[i] = <Star />;
    }
    if (value % 1 != 0) // if value is a decimal, add half star
        stars[i-1] = <HalfStar />
    
    return (
        <div className="ratings1">
            {stars.map((star, index) => (
            <div key={index}>{star}</div>
            ))}
        </div>
    )
}


