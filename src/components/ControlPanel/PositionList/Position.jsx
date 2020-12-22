import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUniversityPosition } from '../../../actions/university';

const Position = ({ position }) => {
    const universities = useSelector(state => state.university.universityList);
    const dispatch = useDispatch();
    return (
        <div className="position-item">
            <div className="position-item__name">{position.value}</div>
            <div className="position-item__university">{universities.find(univer => univer._id === position.university).name}</div>
            <button className="position-item__delete" onClick={() => dispatch(deleteUniversityPosition(position._id))}>удалить должность</button>
        </div>
    )
}

export default Position;