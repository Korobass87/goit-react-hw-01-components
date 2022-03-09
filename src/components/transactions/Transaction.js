import data from "./transactions.json"
import Item from './TransactionItem'
import {Table, TitleTable, TitleColumn} from './Section_transaction.styled'


export default function Transaction() {
    return (<Table>
  <thead>
    <TitleTable>
      <TitleColumn>Type</TitleColumn>
      <TitleColumn>Amount</TitleColumn>
      <TitleColumn>Currency</TitleColumn>
    </TitleTable>
  </thead>

  <tbody>
            {data.map((item, idx) =>
                <Item key={item.id} idx={idx} type={item.type} amount={item.amount} currency={ item.currency}/>              
            )
            }
  </tbody>
</Table>)
}