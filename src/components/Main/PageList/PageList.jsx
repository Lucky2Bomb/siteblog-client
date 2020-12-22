import React from 'react';
import '../../../less/style.scss';
import { useDispatch } from 'react-redux';

const PageList = ({currentPage, pages, setCurrentPage }) => {
    const dispatch = useDispatch();

    let pagesList = [];

    function goPageHandler(num) {
        dispatch(setCurrentPage(num));
    }

    for(let i = 1; i <= pages; i++) {
        if (i === currentPage) {
            pagesList.push(<span key={i} onClick={() => goPageHandler(i)} className="pages-list__item active">{i}</span>)
        } else {
            pagesList.push(<span key={i} onClick={() => goPageHandler(i)} className="pages-list__item">{i}</span>)
        }
    }

    return (
        <div className="pages-list">
            {pagesList}
        </div>
    )
}

export default PageList;