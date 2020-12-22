import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createNewSpecialityGroup, getAllSpecialityGroupList, getAllSpecialityList } from '../../../actions/university';
import SpecialityGroup from './SpecialityGroup';

const SpecialityGroupList = () => {
    const dispatch = useDispatch();

    const allSpecialityGroupList = useSelector(state => state.university.allSpecialityGroupList);
    const specialityGroupList = allSpecialityGroupList.map(sp => <SpecialityGroup specialityGroup={sp} key={sp._id} />);
    const specialityList = useSelector(state => state.university.allSpecialityList);
    
    function buttonHandlerAdd() {
        dispatch(createNewSpecialityGroup(newSpecialityGroup, newSpeciality))
        setNewSpecialityGroup("");
    }

    const [newSpeciality, setNewSpeciality] = useState("");
    const [newSpecialityGroup, setNewSpecialityGroup] = useState("");

    useEffect(() => {
        dispatch(getAllSpecialityGroupList());
        dispatch(getAllSpecialityList());
    }, []);
    return (
        <div>
            <div className="faculty-item">
                <div className="faculty-item__name header">Название группы</div>
                <div className="faculty-item__university header">Специальность</div>
                <div className="faculty-item__delete header"></div>
            </div>
            {specialityGroupList}
            <div className="faculty-item">
                <div className="faculty-item__name"><input type="text" value={newSpecialityGroup} onChange={e => setNewSpecialityGroup(e.target.value)} placeholder="Введите название..." name="" id="" /></div>
                <div className="faculty-item__university">
                    <select onChange={(e) => setNewSpeciality(e.target.value)} value={newSpeciality}>
                        <option value="">-</option>
                        {specialityList.map((f) => <option value={f.name} key={f.name}>{f.name}</option>)}
                    </select>
                </div>
                <div className="faculty-item__add">
                    <button onClick={() => buttonHandlerAdd()}>Добавить</button>
                </div>
            </div>
        </div>
    )
}

export default SpecialityGroupList;