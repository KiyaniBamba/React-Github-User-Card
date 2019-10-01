import React from 'react';

const UserData = ({props}) => {
    return (
        <p>
            Username : {props.login} <br></br>
            Bio: {props.bio} <br></br>
            Location: {props.location}
        </p>
    )
}

export default UserData 