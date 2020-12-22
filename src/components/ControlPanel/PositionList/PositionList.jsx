import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createNewUniversityPosition } from '../../../actions/university';
import Position from './Position';

const PositionList = () => {
    const dispatch = useDispatch();
    const positions = useSelector(state => state.users.universityPositions);
    const [positionName, setPositionName] = useState("");
    const universities = useSelector(state => state.university.universityList);
    const [universityState, setUniversityState] = useState(universities[0].value);
    const positionList = positions.map(pos => <Position position={pos} key={pos._id} />)
    function buttonHandlerCreatePosition() {
        dispatch(createNewUniversityPosition(positionName, universities.find(univer => univer.value === universityState)._id));
        setPositionName("");
    }
    return (
        <div>
            <div className="position-item">
                <div className="position-item__name header">Название должности</div>
                <div className="position-item__university header">Название университета</div>
                <div className="position-item__delete header"></div>
            </div>
            {positionList}
            <div className="position-item">
                <div >
                    <input className="position-item__name" value={positionName} onChange={(e) => setPositionName(e.target.value)} type="text" placeholder="Введите название..." name="" id="" />
                </div>
                <div className="position-item__university">
                    <select onChange={(e) => setUniversityState(e.target.value)} value={universityState}>
                        {universities.map((up) => <option value={up.name} key={up.name}>{up.name}</option>)}
                    </select>
                </div>
                <div className="position-item__delete">
                    <button onClick={() => buttonHandlerCreatePosition()}>Создать</button>
                </div>
            </div>
        </div>
    )
}

export default PositionList;