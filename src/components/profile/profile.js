import {Profile, Description, Avatar, UserName, Tag, Stats, StatsItem, Location, Label, Quantity } from "./section_profile.styled"
import React from "react";

export default function ProfileFn({avatar, username, tag, location, followers, views, likes}) {
    
  return <Profile>
    <Description>
      <Avatar
        src={avatar}
        alt="avatar"
        
      />
      <UserName>{username}</UserName>
      <Tag>@{tag}</Tag>
      <Location>{location}</Location>
    </Description>

    <Stats>
      <StatsItem>
        <Label>Followers</Label>
        <Quantity>{followers}</Quantity>
      </StatsItem>
      <StatsItem>
        <Label>Views</Label>
        <Quantity>{views}</Quantity>
      </StatsItem>
      <StatsItem>
        <Label>Likes</Label>
        <Quantity>{likes}</Quantity>
      </StatsItem>
    </Stats>
  </Profile>
}