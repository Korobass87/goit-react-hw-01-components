import React from "react"
import SectionProfile from "../profile/sectionProfile"
import SectionStatistics from "../statistics/sectionStatistics"
import SectionFrienList from"../friendList/sectionFriendList"
import SectionTransaction from"../transactions/sectionTransactions"


export default function App() {
    return (<div>
                <SectionProfile />
                <SectionStatistics titleName={"Upload stats"} />
                <SectionFrienList />
                <SectionTransaction/>
            </div>
    

    ) 

}

 