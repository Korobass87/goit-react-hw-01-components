import Friend from "./Item"
import { ListUser } from './Profile.styled'
export default function List ({friendsArr}) {
    
    return (
        <ListUser >
            {friendsArr.map(friend => (
                <Friend key={friend.id} avatar={friend.avatar} name={friend.name} status={friend.isOnline}   />
       ))
        }
        </ListUser>
)

}