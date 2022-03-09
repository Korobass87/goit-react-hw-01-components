

import {User, Name, Online, Avatar} from "./Profile.styled"


export default function Friend({ id, avatar, name, status }) {
    
    function getColor() {
       return status ? "green" : "red"
    }
    return (
        
        <User>
                <Online style={{ backgroundColor: `${getColor()}` }} ></Online>
                <Avatar  src={avatar} alt="User avatar" />
            <Name>{name}</Name>
</User>
        )
}
    
