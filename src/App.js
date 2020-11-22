import React from 'react';
import './App.css';
import Parent from "./modul3/Parent";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h2 style={{color:'#00ff00'}}>Tugas Modul 3 Praktikum RSBK </h2>
        <h3 style={{color:'#00ff00'}}>Kelompok 42 <br/><br/> Penilaian Kontestan</h3>
        <Parent />
      </div>
    )
  }
}

export default App;