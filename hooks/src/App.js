import './App.css';
import Movielist from './component/Movielist';
import {useState} from 'react';
import Movieadd from './component/Movieadd';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const [films, setFilms] = useState([
    {
      title : "Inception",
      description : "Inception ou Origine, est un thriller de science-fiction américano-britannique sorti en 2010. ",
      posterUrl :"https://media.senscritique.com/media/000004710747/150/Inception.jpg",
      rate:4
    } ,
    {
      title : "Miracle in Cell No. 7",
      description : " miracle in cell7 ou 7 Koğuştaki Mucize est un film dramatique turc réalisé en 2019",
  
      posterUrl :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXZv_NmhKuItl3W2vAwzIFmMmYkYGALHTp-7hbzowTPPTAzn0B",
      rate :"5",
    },
    {
      title : "Princesse Mononoké ",
      description : "est un film d'animation historique et de fantasy japonais de Hayao Miyazaki, sorti le 12 juillet 1997",
      posterUrl :"https://media.senscritique.com/media/000020028877/150/Princesse_Mononoke.jpg",
      rate:3,

    },

    
  ])
  const add=(newMovie)=>{
    setFilms([...films,newMovie])

  }
  return (
    <div className="App">
      <header className="App-header">
        <Movielist films={films}/>
        <Movieadd add={add}/>

      </header>
    </div>
  );
}

export default App;
