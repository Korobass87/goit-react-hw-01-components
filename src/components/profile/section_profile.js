import ProfileFn from "./profile.js"
import user from "./profile.json"
import {Container} from './section_profile.styled'
export default function SectionProfile() {
    return <Container>
        <ProfileFn username={user.username} tag={user.tag} location={user.location} avatar={user.avatar} followers={user.stats.followers} views={user.stats.views} likes={user.stats.likes}/>
    </Container>
}