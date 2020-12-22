import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createNewSpeciality, getAllFacultyList, getAllSpecialityList } from '../../../actions/university';
import Speciality from './Speciality';

const SpecialityList = () => {
    const dispatch = useDispatch();
    const allSpecialityList = useSelector(state => state.university.allSpecialityList);
    const specialityList = allSpecialityList.map(spec => <Speciality speciality={spec} key={spec._id} />);

    const faculties = useSelector(state => state.university.allFacultyList);

    useEffect(() => {
        dispatch(getAllFacultyList());
        dispatch(getAllSpecialityList());
    }, []);

    function buttonHandlerAdd() {
        dispatch(createNewSpeciality(newSpeciality, facultyState));
        setNewSpeciality("");
    }

    const [facultyState, setFacultyState] = useState("");
    const [newSpeciality, setNewSpeciality] = useState("");
    return (
        <div>
            <div className="faculty-item">
                <div className="faculty-item__name header">Название специальности</div>
                <div className="faculty-item__university header">Факультет</div>
                <div className="faculty-item__delete header"></div>
            </div>
            {specialityList}
            <div className="faculty-item">
                <div className="faculty-item__name"><input type="text" value={newSpeciality} onChange={e => setNewSpeciality(e.target.value)} placeholder="Введите название..." name="" id="" /></div>
                <div className="faculty-item__university">
                    <select onChange={(e) => setFacultyState(e.target.value)} value={facultyState}>
                        <option value="">-</option>
                        {faculties.map((f) => <option value={f.name} key={f.name}>{f.name}</option>)}
                    </select>
                </div>
                <div className="faculty-item__add">
                    <button onClick={() => buttonHandlerAdd()}>Добавить</button>
                </div>
            </div>
        </div>
    )
}

export default SpecialityList;