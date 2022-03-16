import transactions from "./transactions.json"
import TransactionHistory  from './transactionItem'
import {Table, TitleTable, TitleColumn} from './sectionTransaction.styled'


export default function Transaction() {
    return (<Table>
  <thead>
    <TitleTable>
      <TitleColumn>Type</TitleColumn>
      <TitleColumn>Amount</TitleColumn>
      <TitleColumn>Currency</TitleColumn>
    </TitleTable>
  </thead>
  <TransactionHistory  items={transactions} />
  
</Table>)
}