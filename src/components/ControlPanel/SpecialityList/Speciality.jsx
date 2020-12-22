import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { deleteSpeciality, editSpeciality } from '../../../actions/university';

const Speciality = ({ speciality }) => {
    const dispatch = useDispatch();
    const faculties = useSelector(state => state.university.allFacultyList);
    const [faculty, setFaculty] = useState(speciality.faculty);

    function editCurrSpeciality(e) {
        setFaculty(e);
        dispatch(editSpeciality(speciality.name, e));
    }

    return (
        <div>
            <div className="faculty-item">
                <div className="faculty-item__name">{speciality.name}</div>
                <div className="faculty-item__university">
                    <select onChange={(e) => editCurrSpeciality(e.target.value)} value={faculty}>
                        {faculties.map((up) => <option value={up.name} key={up.name}>{up.name}</option>)}
                    </select>
                </div>
                <div className="faculty-item__delete">
                    <button onClick={() => dispatch(deleteSpeciality(speciality.name))}>удалить</button>
                </div>
            </div>
        </div>
    )
}

export default Speciality;