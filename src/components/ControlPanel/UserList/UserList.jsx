import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from './../../../actions/users';
import User from './User';
import PageList from './../../Main/PageList/PageList';
import { setCurrentPage } from './../../../reducers/usersReducer';

const UserList = () => {
    const dispatch = useDispatch();
    const currentPage = useSelector(state => state.post.currentPage);
    const pages = useSelector(state => state.users.pages);
    const users = useSelector(state => state.users.users);
    useEffect(() => {
        dispatch(getUsers(currentPage));
    }, [currentPage]);

    const userList = users.map(u => <User user={u} key={u.email} />);

    return (
        <div>
            <div className="user-item">
                <div className="user-item__initials header">
                    Инициалы
                </div>

                <div className="user-item__email header">
                    Логин
                </div>

                <div className="user-item__position header">
                    Должность
                </div>

                <div className="user-item__roles header">
                    Роль
                </div>

                <div className="user-item__delete header">
                    
                </div>
            </div>
            {userList}
            <PageList pages={pages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </div>
    )
}

export default UserList;