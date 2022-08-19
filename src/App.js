import React from 'react';
import './App.css';
import WordCard from './WordCard';

const word = "Hello";
const word1 = "World";
const word2 = "Blue";
const word3 = "Sky";

function App() {
  return (
    <div>
      <h1>Hello Welcome to WordCard Game</h1>
      <h2>เรียงลำดับข้อความให้ถูกต้อง</h2>
      <WordCard value={word}/>
      <WordCard value={word1}/>
      <WordCard value={word2}/>
      <WordCard value={word3}/>
    </div>
  );
}

export default App;
