import infodata from "../statistics/data.json" 
import {Container, NameTitle} from './sectionStatistic.styled'
import Statistics from "./Statistics"
import React from "react";

export default function SectionStatistics({titleName}) {
    
    return (<Container>
    <NameTitle>{titleName}</NameTitle>
        <Statistics info={infodata}/>

</Container>)
}
