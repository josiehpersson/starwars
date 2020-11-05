import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ListItem from '../ListItem/ListItem';

export default function Page(props) {
  const [page, setPage] = useState(1);
  const [characters, setCharacters] = useState([]);
  const characterArr = [];

  useEffect(() => {
    const baseURL = 'https://swapi.dev/api/people/?page=';
    axios
      .get(`${baseURL}${page}`)
      .then((res) => {
        console.log(res.data);
        setCharacters(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [page]);
  const increment = () => {
    if (page <= 8) {
      setPage(() => page + 1);
    } else {
      setPage(() => 1);
    }
  };
  const decrement = () => {
    if (page >= 2) {
      setPage(() => page - 1);
    } else {
      setPage(() => 1);
    }
  };

  useEffect(() => {
    const nextbtn = document.getElementById('forward');
    const prevbtn = document.getElementById('back');
    if (page === 9) {
      nextbtn.style.display = 'none';
    } else {
      nextbtn.style.display = 'inline-flex';
    }
    if (page === 1) {
      prevbtn.style.display = 'none';
    } else {
      prevbtn.style.display = 'inline-flex';
    }
  }, [page]);

  for (let i = 0; i < characters.length; i++) {
    characterArr.push(
      <ListItem
        key={JSON.stringify(characters[i])}
        characterArr={characters[i]}
        created={characters[i].created.slice(0, 10)}
        name={characters[i].name}
        height={characters[i].height}
        mass={characters[i].mass}
        skinColor={characters[i].skin_color}
        hairColor={characters[i].hair_color}
        eyeColor={characters[i].eye_color}
        birthYear={characters[i].birth_year}
        gender={characters[i].gender}
      />
    );
  }

  return (
    <div className="page-container">
      <div className="characters-container">{characterArr}</div>
      <div className="nav-btns">
        <button type="button" className="nav-btn" id="back" onClick={decrement}>
          <i className="fas fa-chevron-left"></i>
          <p>Previous</p>
        </button>
        <button
          type="button"
          className="nav-btn"
          id="forward"
          onClick={increment}
        >
          <p>Next</p>
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
}
