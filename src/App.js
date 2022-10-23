import './App.css';
import Axios from 'axios';
import { useEffect, useState } from 'react';
import RecipeTile from './components/recipe-tile/RecipeTile';


function App() {

const [query, setquery] = useState("")
const [recipes, setrecipes] = useState([])
const [healthLabel, sethealthLabel] = useState("vegan")


  const YOUR_APP_ID = "e6def25d"
  const YOUR_APP_KEY = "56980cae695ce22108524f8f4a1838b5"


//aqui estamos declarando a api e passando nosso id e key de acesso dela, falamos que o valor de pesquisa é a query ja que é onde o valor de nosso imput esta
const url =`https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&&health=${healthLabel}`;


async function fetchdata (){

var result = await Axios.get(url)//aqui estamos pegando acesso a data dessa api atraves do Axios
setrecipes(result.data.hits)//aqui estamos pegando as receitas exibidas atraves do valor do query e colando elas dentro do state Recipe, os hits seriam apenas as possiblidades de receitas
console.log(result.data)

}

//essa function impede que a pagina recarregue ao clicar no submit
const submit = (e) => {

e.preventDefault()


}


  return (
    <div className="App">
 <h1>Suas Comidas Mais Rápidas</h1>
 <form className='App__searchForm' onSubmit={submit}>
  <input type="text" className='App__input' placeholder="ingrediente desejado" value={query} onChange={(e) => setquery(e.target.value)}/> {/* usando onChange estamos falando que toda vez que algo ser escrito nesse input vai ser inserido no setQuery e automaticamente no query */}
  <input onClick={fetchdata} type="submit" className='App__submit' value="Quero Receitas"/> {/* quando clicamos nesse botao ele imprime todas receitas com o valor inserido no query, ja que esse query esta sendo chamado na variavel url onde esta a api */}

  <select className="app_healthLabels">

<option onClick={() => sethealthLabel("vegan")}>Vegano</option>
<option value="vegetarian "onClick={() => sethealthLabel("vegetarian")}>Vegetariano</option>

  </select>
 </form>

 <div>
{/* aqui estamos mapeando o state recipe e falando que todo novo elemento dele vem em forma de p */}
{recipes.map(recipe =>{
return <RecipeTile recipe={recipe}/>
})}
 </div>

    </div>
  );
}

export default App;
