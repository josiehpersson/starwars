import React, {useState, useEffect} from 'react';
import './homepage.css';
import {Link} from 'react-router-dom';
import Page from '../Pages/Page';
import Search from '../Search/Search';

export default function HomePage() {
const [page, setPage] = useState(1);
const [search, setSearch] = useState('');

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

const handleChange = (e) => {
setSearch(()=> e.target.value);
console.log(search);
}
useEffect(() => {
    const nextbtn = document.getElementById('forward');
    const prevbtn = document.getElementById('back');
    if(page === 9) {
        nextbtn.style.display='none';
      } else {
        nextbtn.style.display='inline-flex';
      }
      if(page === 1) {
          prevbtn.style.display='none';
      } else {
          prevbtn.style.display="inline-flex";
      }

},[page])
    return (
        <div className="homepage-container">
            <div className="header">
                <Link to="/">
                <button type="button" className="home-btn"><i className="fas fa-jedi"></i></button>
                </Link>
            <form className='search-container'>
                <input type='text' className="search-bar" placeholder="Search..." value={search} onChange={handleChange}></input>
                <Link to="/search">
                <button type="button" className="search-btn"><i className="fas fa-search"></i></button>
                </Link>
            </form>
            </div>
            <div className="homepage-body">
                <div className="search-results">
                    <Search />
                </div>
            <Page pageValue={page}/>
            </div>
            <div className="nav-btns">
    <button type="button" className="nav-btn" id="back" onClick={decrement}><i className="fas fa-chevron-left"></i><p>Previous</p></button>
                <button type="button" className="nav-btn" id="forward" onClick={increment}><p>Next</p><i className="fas fa-chevron-right"></i></button>
            </div>
        </div>
        
    )
}