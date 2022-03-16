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

const NameTitle = styled.h2`
font-size: 26px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 350px;
    height: 100px;
    margin: 0;
`
const List = styled.ul`
display: flex;
margin: 0;
padding: 0;
list-style: none;
`

const Item = styled.li`
display: flex;
 flex-direction: column;
 width: 70px;
 height: 100px;
 justify-content: center;
    align-items: center;
    border: solid 1px black;
    box-sizing: border-box;
    
`

const Label = styled.span`
display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
 height: 100%;
 color: white;
`
const Percentage = styled.span`
display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
 height: 100%;
 font-size: 23px;
 font-weight: 600;
 color: white;
`


export {Container, NameTitle, List, Item, Label, Percentage}