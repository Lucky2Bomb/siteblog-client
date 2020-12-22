import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteFaculty } from '../../../actions/university';

const Faculty = ({ faculty }) => {
    const dispatch = useDispatch();
    const universities = useSelector(state => state.university.universityList);
    const [univer, setUniverState] = useState(universities[0].value);
    return (
        <div>
            <div className="faculty-item">
                <div className="faculty-item__name">{faculty.name}</div>
                <div className="faculty-item__university">
                    <select onChange={(e) => setUniverState(e.target.value)} value={univer}>
                        {universities.map((up) => <option value={up.name} key={up.name}>{up.name}</option>)}
                    </select>
                </div>
                <div className="faculty-item__delete">
                    <button onClick={() => dispatch(deleteFaculty(faculty.name))}>удалить</button>
                </div>
            </div>
        </div>
    )
}

export default Faculty;