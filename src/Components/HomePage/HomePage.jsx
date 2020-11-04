import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './homepage.css';
import Page from '../Pages/Page';

export default function HomePage() {
const [page, setPage] = useState(1);

const increment = () => {
    if(page <=8){
        setPage(() => page+1)
    }
    else {
        setPage(() =>1)
    }
}
const decrement = () => {
    if(page >= 2) {
        setPage(()=> page-1)
    }
    else {
        setPage(()=> 1)
    }
}
console.log(page, 'homepagecomponent');
    return (
        <div className="homepage-container">
            <div className="header">
                <button type="button" className="home-btn">
            <i className="fas fa-jedi"></i>
                </button>
            <form className='search-container'>
                <input type='text' className="search-bar" placeholder="Search..."></input>
                <button type="button" className="search-btn"><i className="fas fa-search"></i></button>
            </form>
            </div>
            <div className="homepage-body">
            <Page value={page}/>
            </div>
            <div className="nav-btns">
                <button type="button" className="nav-btn" id="back" onClick={decrement}><i className="fas fa-chevron-left"></i></button>
                <button type="button" className="nav-btn" id="forward" onClick={increment}><i className="fas fa-chevron-right"></i></button>
            </div>
        </div>
    )
}