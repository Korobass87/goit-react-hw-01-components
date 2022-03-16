import OneItem from './statisticItem'
import React from "react";
import {List, Item} from './sectionStatistic.styled'
export default function Statistics ({info}) {
    
    return (
        <List >
       {info.map(item => (
        <Item key={item.id} style={{ backgroundColor: `${generateColor()}` }}>
          <OneItem
            label={item.label}
            percentage={item.percentage}
            />
        </Item>
      ))}
        </List>
)

}

function generateColor() {
  return '#' + Math.floor(Math.random()*16777215).toString(16)
}

           