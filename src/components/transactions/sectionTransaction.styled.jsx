import styled from '@emotion/styled'




const Container = styled.section`
 background-color: rgb(199, 195, 195);
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 padding-top: 40px;
 padding-bottom: 40px;
 box-sizing: border-box;
 
`;

const Table = styled.table`
 border: 1px solid rgb(199, 198, 198);
 box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
 align-items: center;
 width: 600px;
 border-collapse: collapse;
 border-radius: 5px;
 display: block;
 overflow: hidden;
 `
const TitleTable = styled.tr`
background-color: #67a5f5;
text-transform: uppercase;
height:35px;

`
const TitleColumn = styled.th`
:not(:last-child){
border-right: solid 1px white;
width: 200px;
}
;


`
const ItemBody = styled.tr`
height:45px;
font-size: 18px;

background-color: ${(props) => {
    
    if (props.idx%2 === 0) { return "rgb(243, 237, 237)" }
    return "rgb(221, 217, 217)"
}}
`

const DataBody = styled.td`
box-sizing: border-box;
color: rgb(105, 102, 102);
width: 200px;
:first-of-type {padding-left: 70px}
:not(:first-of-type) {text-align: center};
:not(:last-child){
border-right: solid 1px rgb(199, 198, 198);

`


export {Container, Table, TitleTable, TitleColumn, ItemBody, DataBody}