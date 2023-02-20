import recipe1 from './hakarl.jpg'
import recipe2 from './surstromming.jpg'

export default function menu() {
    const main = document.querySelector('main')
    const menuDiv = document.createElement('div')
    const recipes = document.createElement('div')
    const recipeOne = document.createElement('div')
    const hakarl = document.createElement('h2')
    const hakarlImg = new Image();
    const recipeTwo = document.createElement('div')
    const surstromming = document.createElement('h2')
    const surstrommingImg = new Image();
    

    hakarl.innerHTML = 'Hákarl'
    hakarlImg.src = recipe1
    surstromming.innerHTML = 'Surströmming'
    surstrommingImg.src = recipe2
    

    main.innerHTML = ''
    menuDiv.classList.add('menu')
    recipeOne.classList.add('recipe')
    recipeOne.appendChild(hakarl)
    recipeOne.appendChild(hakarlImg)
    recipeTwo.classList.add('recipe')
    recipeTwo.appendChild(surstromming)
    recipeTwo.appendChild(surstrommingImg)
    recipes.classList.add('recipes')
    recipes.appendChild(recipeOne)
    recipes.appendChild(recipeTwo)
    menuDiv.appendChild(recipes)

    main.appendChild(menuDiv)
    document.body.appendChild(main)
  }