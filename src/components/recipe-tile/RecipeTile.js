import React from 'react'
import "./RecipeTile.css"

export default function RecipeTile(props) {
  return (
<div className='recipeTile'>
<img className='recipeTile__img' alt='imagem comida' src={props.recipe["recipe"]["image"]}/> {/* //aqui colocamos ["recipe"] pois é onde esta nossa receita exatamente na api e depois exibimos image pois é a imagem dela< */}
<p className='recipeTile__name'>{props.recipe["recipe"]["label"]}</p> {/* //aqui colocamos ["recipe"] pois é onde esta nossa receita exatamente na api e depois exibimos label pois é o nome dela< */}
</div>
  )
}
