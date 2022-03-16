
import {ItemBody, DataBody} from './sectionTransaction.styled'

export default function TransactionHistory ({items}) {
   return (

        <tbody>
            {items.map(({id, type, amount, currency}, idx) =>
              <ItemBody key={id} idx={idx}>
              <DataBody>{Upper(type)}</DataBody>
        <DataBody>{amount}</DataBody>
              <DataBody>{currency}</DataBody>
      </ItemBody>                
            )
            }
  </tbody>
   
    )
}


function Upper(world) {
    let newWorld = world[0].toUpperCase() + world.slice(1)
    return newWorld
}