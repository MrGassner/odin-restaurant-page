import Boat from './viking_boat.jpg'

export default function home() {
  const main = document.querySelector('main')
  const title = document.createElement('h1')
  const boatImg = new Image();
  const container = document.createElement('div')

  main.innerHTML = ''

  boatImg.src = Boat
  title.innerHTML = 'Home test'
  container.appendChild(boatImg)
  container.appendChild(title)
  

  main.appendChild(container)
  
  document.body.appendChild(main)
}