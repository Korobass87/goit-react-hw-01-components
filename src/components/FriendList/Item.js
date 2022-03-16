

import {User, Name, Online, Avatar} from "./profile.styled"


export default function Friend({avatar, name, status }) {
    
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
    
