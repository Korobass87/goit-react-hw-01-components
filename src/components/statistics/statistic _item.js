import React from "react";
import {Label, Percentage} from './Section_statistic.styled'
 

export default function OneItem({ percentage, label }) {
    
        
    return (
      <><Label> {label} </Label> <Percentage> {percentage}% </Percentage></>
    )

}

