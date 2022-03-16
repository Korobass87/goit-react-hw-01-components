import React from "react";
import {Label, Percentage} from './sectionStatistic.styled'
 

export default function OneItem({ percentage, label }) {
    
        
    return (
      <><Label> {label} </Label> <Percentage> {percentage}% </Percentage></>
    )

}

