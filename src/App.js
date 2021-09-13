import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import CharacterCard from './components/CharacterCard/CharacterCard';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Pagination from './components/Pagination/Pagination';
import Filter from './components/Filter/Filter';
import OneCharacterCard from './components/OneCharacterCard/OneCharacterCard';


function App() {

  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});
  const [search, setSearch] = useState('');

  const url = "https://rickandmortyapi.com/api/character";

  const fetchCharacters = (url) => {
      fetch(url)
          .then(response => response.json())
          .then(data => {
            setCharacters(data.results)
            setInfo(data.info);
          })
          .catch(error => console.log(error))
  };

  const onPrevius = () =>{
    fetchCharacters(info.prev);
  }

  const onNext= () =>{
    fetchCharacters(info.next);
  }

  useEffect(() =>{
      fetchCharacters(url);
  }, [])


  return (
    <>   
      <Router>
        <Header />
        <Switch>
          <Route path='/' exact>
            <Navbar search={search} setSearch={setSearch} />
            <div className="">
              <h3>Personajes</h3>
              <CharacterCard  characters={characters} />
            </div>
            <Pagination prev={info.prev} next={info.next} onPrevius={onPrevius} onNext={onNext} />
          </Route>
        </Switch>
        <Switch>
          <Route path='/filter'>
            <Filter />
          </Route>
        </Switch>
        <Switch>
          <Route path='/oneCharacterCard'  exact>
            <OneCharacterCard />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
