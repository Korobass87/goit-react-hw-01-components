import styled from '@emotion/styled'

const Container = styled.section`
 background-color: rgb(199, 195, 195);
 display: flex;
 justify-content: center;
 align-items: center;
 padding-top: 40px;
 padding-bottom: 40px;
 box-sizing: border-box;
`;

const Profile = styled.div`
 display: flex;
  flex-direction: column;
  background-color: white;
  width: 350px;
  padding-top: 50px;
`
const Description = styled.div`
display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 30px;
`

const Avatar = styled.img`
width: 100px;
  height: 100px;
  padding: 0px;
  border-radius: 50%;
  background-color: rgb(235, 225, 225);
`

const UserName = styled.p`
 font-size: 25px;
  font-weight: 600;
  margin-bottom: 10px;
`
const Tag = styled.p`
font-weight: 500;
  font-size: 20px;
  margin-top: 0;
  margin-bottom: 10px;
  color: rgb(192, 176, 176);
  `

const Location = styled.p`
 font-weight: 500;
  font-size: 20px;
  margin-top: 0;
  margin-bottom: 10px;
  color: rgb(192, 176, 176);  
`
const Stats = styled.ul`
display: flex;
  justify-content: space-around;
  padding-left: 0;
  margin-bottom: 0;
  margin-top: 0;
`
const StatsItem = styled.li`
display: flex;
  flex-direction: column;
  padding-top: 20px;
  padding-bottom: 20px;
  width: 100%;
  height: 100%;
  border: solid 1px rgb(151, 146, 146);
  align-items: center;
  background-color: rgb(214, 212, 212);
`
const Label = styled.span`
 color: rgb(151, 146, 146);
  font-size: 16px;
  margin-bottom: 5px;
`
const Quantity = styled.span`
font-size: 20px;
  font-weight: 700;
`

export {Container, Profile, Description, Avatar, UserName, Tag, Location, Stats, StatsItem, Label, Quantity }