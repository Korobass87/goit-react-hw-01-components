import React from "react"
import SectionProfile from "../profile/section_profile"
import SectionStatistics from "../statistics/section_statistics"
import SectionFrienList from"../FriendList/section_friendList"
import SectionTransaction from"../transactions/section_transactions"


export default function App() {
    return (<div>
            <SectionProfile />
        <SectionStatistics />
        <SectionFrienList />
        <SectionTransaction/>
    </div>
    

    ) 

}

 