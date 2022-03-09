import infodata from "../statistics/data.json" 
import {Container, NameTitle} from './Section_statistic.styled'
import Statistics from "./Statistics"
import React from "react";

export default function SectionStatistics() {
    
    return (<Container>
    <NameTitle>Upload stats</NameTitle>
        <Statistics info={infodata}/>

</Container>)
}
