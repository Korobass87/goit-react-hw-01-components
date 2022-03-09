
import {ItemBody, DataBody} from './Section_transaction.styled'

export default function Item({currency, type, amount, idx}) {
    return (
    <ItemBody idx={idx}>
            <DataBody>{Upper(type)}</DataBody>
      <DataBody>{amount}</DataBody>
            <DataBody>{currency}</DataBody>
    </ItemBody>

    )
}


function Upper(world) {
    let newWorld = world[0].toUpperCase() + world.slice(1)
    return newWorld
}