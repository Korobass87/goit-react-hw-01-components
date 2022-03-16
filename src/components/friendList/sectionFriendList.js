import { Container } from './profile.styled'
import List from "./friendList"
import friends from"./friends.json"
export default function SectionFrienList() {
    
    return <Container>
        <List friendsArr={friends}/>
    </Container>
}