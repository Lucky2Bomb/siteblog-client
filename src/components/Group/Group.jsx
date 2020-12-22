import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentGroupUsers } from '../../actions/university';
import Loader from '../Utils/Loader/Loader';

const Group = () => {
    let { id } = useParams();
    const dispatch = useDispatch();
    const currentGroup = useSelector(state => state.university.currentGroup);
    const loader = useSelector(state => state.app.loader);


    useEffect(() => {
        dispatch(getCurrentGroupUsers(id));
    }, []);
    if (loader) {
        return <Loader />
    }

    console.log(currentGroup);
    return (
        <div className="main-wrapper">
            <div className="main group">
                <h2>Специальность: {currentGroup.group.speciality}</h2>
                <h2>группа: {currentGroup.group.name}</h2>
            </div>
        </div>
    );
}

export default Group;