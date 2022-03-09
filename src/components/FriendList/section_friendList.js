import { Container } from './Profile.styled'
import List from "./FriendList"
import friends from"./friends.json"
export default function SectionFrienList() {
    
    return <Container>
        <List friendsArr={friends}/>
    </Container>
}