import React, { useState, useEffect } from 'react';
import { AiFillTwitterSquare} from "react-icons/ai";
import { FaQuoteRight } from "react-icons/fa";
import './App.css';

const dataMovies = [
  {
    text: 'May the Force be with you.',
    author: '-Star Wars, 1977'
  },
  {
    text: "There's no place like home.",
    author: '-The Wizard of Oz, 1939'
  },
  {
    text: 'Carpe diem. Seize the day, boys. Make your lives extraordinary.',
    author: '-Dead Poets Society, 1989'
  },
  {
    text: "I'm the king of the world!",
    author: '-Titanic, 1997'
  },
  {
    text: 'Elementary, my dear Watson.',
    author: '-The Adventures of Sherlock Holmes, 1939'
  },
  {
    text: "It's alive! It's alive!",
    author: '-Frankenstein, 1931'
  },
  {
    text: "My mama always said life was like a box of chocolates. You never know what you're gonna get.",
    author: '-Forrest Gump, 1994'
  },
  {
    text: "I'll be back.",
    author: '-The Terminator, 1984'
  },
  {
    text: "You're gonna need a bigger boat.",
    author: 'Jaws, 1975'
  },
  {
    text: 'My precious.',
    author: 'he Lord of the Rings: Two Towers, 2002'
  }
];

const colors = [
  '#16a085',
  '#27ae60',
  '#2c3e50',
  '#f39c12',
  '#e74c3c',
  '#9b59b6',
  '#FB6964',
  '#342224',
  '#472E32',
  '#BDBB99'
];

function App() {
  const [text, setText] = useState('');
  const [author, setAuthor] = useState('');
  const [colorBG, setColorBG] = useState({});
  
  const setPhrase = () => {
    let index = Math.floor(Math.random() * (dataMovies.length - 1)) + 1;
    console.log(index);
    setText(dataMovies[index].text);
    setAuthor(dataMovies[index].author);
    setColorBG({backgroundColor: colors[index]});
  };

  useEffect(() =>{
    setPhrase();
  },[]);

  return (
    <div className='App' style={colorBG}>
      <div id='quote-box'>
        <h1 id='text'><FaQuoteRight size="32px" />{text}</h1>
        <h3 id='author'>{author}</h3>
        <button id='new-quote' onClick={setPhrase}>New quote</button>
        <a id='tweet-quote' href='twitter.com/intent/tweet'><AiFillTwitterSquare size="96px"/></a>
      </div>
    </div>
  );
};

export default App;
