import React from 'react';

const UserData = ({props}) => {
    return (
        <>
            <h1> Github User Card </h1>
        <p>
            
            Username: {props.login} <br/>
            Bio: {props.bio} <br/>
            Location: {props.location} <br/>
            Public repos: {props.public_repos} <br/>
            Following: {props.following} <br/>
            Followers: {props.followers} <br/>
            <h3> List of followers </h3>

        </p>
        </>
    )
}

export default UserData 