import React from 'react' ;
import {useEffect, useState} from 'react' ;
import Recipe from './Recipe' ;
import './App.css';

const App = () => {
  const APP_ID = '937512c9' ;
  const APP_KEY ='35a8e27123610647f936cc314d5c22ae' ;

  const [recipes, setRecipes] = useState([]) ;
  const [search, setSearch] = useState('') ;
  const [query, setQuery] = useState('chicken') ;

  useEffect(() => {
    getRecipes() ;
  },[query]) ;

  const getRecipes = async () =>{
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`) ;
    const data = await response.json() ;
    setRecipes(data.hits);
    console.log(data.hits)
  };

  const updateSearch = e =>{
    setSearch(e.target.value) ;
  }
  const getSearch = e => {
    e.preventDefault() ;
    setQuery(search) ;
    setSearch('') ;
  }

  return(
    <div className='App'> 
      <form className="search-form" onSubmit={getSearch}>
        <input 
        type="text" 
        className="search-bar" 
        value= {search} 
        onChange= {updateSearch} 
        />

        <button type="submit" className="search-button"> Search </button>
      </form>

      <div className="recipes">
      {recipes.map(recipe =>(
        <Recipe 
        key={recipe.recipe.label}
        title={recipe.recipe.label} 
        calories={recipe.recipe.calories} 
        image={recipe.recipe.image}
        ingredients={recipe.recipe.ingredients}
        type={recipe.recipe.mealType}
        />
      
      ))}
      </div>
    </div>
  )
}


export default App;
