import React from 'react';
import "../../less/style.scss";
import { useSelector } from 'react-redux';

const MyProfile = () => {
    const myProfile = useSelector(state => state.user.currentUser);
    console.log(myProfile); 
    return (
        <div className="profile-wrapper">
            <div className="profile">
                MyProfile
            </div>
        </div>
    );
}

export default MyProfile;