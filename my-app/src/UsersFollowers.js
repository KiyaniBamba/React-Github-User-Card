import React from 'react';

const UsersFollowers = ({props}) => {
        return Object.keys(props).map( (key)=> {
            return (
                <div> 
                    - {props[key].login}
                </div>
            )
        })
    }



export default UsersFollowers