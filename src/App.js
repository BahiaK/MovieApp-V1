import React ,{useState} from 'react'
import MovieList from './components/MovieList'
import data from './data'
import './App.css'
import Add from './components/Add'
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  const [movies, setMovies] = useState (data);

  const handleAdd =(filmjdid)=> {setMovies([...movies,{...filmjdid,_id:movies.length}])}
  return (
    <div>
            <Add handleAdd={handleAdd}/>

      <MovieList data={movies}/>
    </div>
  )
}

export default App