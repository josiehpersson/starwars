import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ListItem from '../ListItem/ListItem';
import './search.css';

export default function Search(props) {
  const [search, setSearch] = useState('');
  const [characters, setCharacters] = useState([]);
  const characterArr = [];

  useEffect(() => {
    const baseURL = 'https://swapi.dev/api/people/?search=';
    axios
      .get(`${baseURL}${search}`)
      .then((res) => {
        console.log(res.data);
        setCharacters(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [search]);

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

  const handleChange = (e) => {
    setSearch(() => e.target.value);
  };

  let showSearch;
  if (characterArr !== undefined || characterArr !== null) {
    showSearch = characterArr;
  } else {
    showSearch = `Sorry, we could't find what you were looking for.`;
  }

  return (
    <div className="search-page-container">
      <form className="search-container">
        <input
          type="text"
          className="search-bar"
          placeholder="Type to search & may the force be with you!"
          value={search}
          onChange={handleChange}
        ></input>
      </form>
      {showSearch}
    </div>
  );
}
