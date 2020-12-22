import React from 'react';

const ProfileInputItem = (props) => {
    return (
        <div className="profile__input">
            <span className="profile__name">{props.name}</span>
            <span className="profile__value">{props.value}</span>
        </div>
    )
}

export default ProfileInputItem;