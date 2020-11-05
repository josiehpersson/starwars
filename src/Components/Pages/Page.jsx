import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ListItem from '../ListItem/ListItem';

export default function Page(props) {
  const [page, setPage] = useState(1);
  const [showSearch, setShowSearch] = useState('');
  const [characters, setCharacters] = useState([]);
  const characterArr = [];

  useEffect(() => {
    const pageValue= props.pageValue;
      setPage(() => pageValue);
  },[props.pageValue]);

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
/*
  useEffect(() => {
    const baseURL = 'https://swapi.dev/api/people/?search=';
    axios
    .get(`${baseURL}${showSearch}`)
    .then((res) => {
      console.log(res.data);
      setCharacters(res.data.results);
    })
    .catch((err) => {
      console.log(err);
    });

  }, [showSearch])

  */
  for (let i = 0; i < characters.length; i++) {
    characterArr.push(
      <ListItem
        key={JSON.stringify(characters[i])}
        characterArr={characters[i]}
        created={characters[i].created.slice(0,10)}
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

  return(
      <div className="page-container">
        <div className="characters-container">{characterArr}</div>
      </div>
      
      ) 
}
