
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

const ListUser = styled.ul`
display: flex;
flex-direction: column;
padding: 0;
`
const User = styled.li`
display: flex;
box-shadow: 5px 5px 5px 0px #adadad;
width: 250px;
padding: 10px;
background-color: rgb(236, 236, 236);

align-items: center;
:not(:last-child) {
    margin-bottom: 10px;
}
`
const Name = styled.p`
margin: 0;
`
const Avatar = styled.img`
width: 48px;
margin-right: 20px;
`

const Online = styled.span`
display: block;
width: 10px;
height: 10px;
margin-right: 20px;
border-radius: 50%;
`


export {Container, ListUser, User, Name, Online, Avatar}