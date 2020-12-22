import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createNewFaculty, getAllFacultyList, getUniversityList } from './../../../actions/university';
import Faculty from './Faculty';
import { useState } from 'react';
import Loader from './../../Utils/Loader/Loader';

const FacultyList = () => {
    const dispatch = useDispatch();
    const allFacultyList = useSelector(state => state.university.allFacultyList);
    const facultyList = allFacultyList.map(fac => <Faculty faculty={fac} key={fac._id} />);

    const universities = useSelector(state => state.university.universityList);
    const [univer, setUniverState] = useState(universities[0].name);
    const [newFaculty, setNewFaculty] = useState("");

    useEffect(() => {
        dispatch(getAllFacultyList());
        dispatch(getUniversityList());
    }, []);

    const loader = useSelector(state => state.app.loader);
    if (loader) {
        return <Loader />
    }
    function buttonHandlerAdd() {
        dispatch(createNewFaculty(newFaculty, univer));
        setNewFaculty("");
    }
    return (
        <div>
            <div className="faculty-item">
                <div className="faculty-item__name header">Название факультета</div>
                <div className="faculty-item__university header">Университет</div>
                <div className="faculty-item__delete header"></div>
            </div>
            {facultyList}
            <div className="faculty-item">
                <div className="faculty-item__name"><input type="text" value={newFaculty} onChange={e => setNewFaculty(e.target.value)} placeholder="Введите название..." name="" id="" /></div>
                <div className="faculty-item__university">
                    <select onChange={(e) => setUniverState(e.target.value)} value={univer}>
                        {universities.map((up) => <option value={up.name} key={up.name}>{up.name}</option>)}
                    </select>
                </div>
                <div className="faculty-item__add">
                    <button onClick={() => buttonHandlerAdd()}>Добавить</button>
                </div>
            </div>
        </div>
    )
}

export default FacultyList;