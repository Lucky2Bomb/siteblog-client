import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteSpecialityGroup, editSpecialityGroup } from '../../../actions/university';

const SpecialityGroup = ({ specialityGroup }) => {
    const dispatch = useDispatch();
    const specialities = useSelector(state => state.university.allSpecialityList);
    const [speciality, setSpeciality] = useState(specialityGroup.speciality);

    function editCurrSpecialityGroup(e) {
        setSpeciality(e);
        dispatch(editSpecialityGroup(specialityGroup.name, e));
    }
    return (
        <div className="faculty-item">
            <div className="faculty-item__name">{specialityGroup.name}</div>
            <div className="faculty-item__university">
                <select onChange={(e) => editCurrSpecialityGroup(e.target.value)} value={speciality}>
                    <option value="">-</option>
                    {specialities.map((up) => <option value={up.name} key={up.name}>{up.name}</option>)}
                </select>
            </div>
            <div className="faculty-item__delete">
                <button
                    onClick={() => dispatch(deleteSpecialityGroup(specialityGroup.name))}
                >удалить</button>
            </div>
        </div>

    )
}

export default SpecialityGroup;