import React, { useState }from 'react';
import '../../../less/style.scss';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentPage } from './../../../reducers/postReducer';

const PageList = () => {
    const dispatch = useDispatch();

    const currentPage = useSelector(state => state.post.currentPage);
    const pages = useSelector(state => state.post.pages);

    let pagesList = [];

    function goPageHandler(num) {
        dispatch(setCurrentPage(num));
    }

    for(let i = 1; i <= pages; i++) {
        if (i === currentPage) {
            pagesList.push(<span key={i} onClick={() => goPageHandler(i)} style={{fontWeight: "700"}}>{i}</span>)
        } else {
            pagesList.push(<span key={i} onClick={() => goPageHandler(i)}>{i}</span>)
        }
    }

    return (
        <div>
            {pagesList}
        </div>
    )
}

export default PageList;