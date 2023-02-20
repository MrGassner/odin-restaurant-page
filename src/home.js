import Boat from './viking_boat.jpg'

export default function home() {
  const main = document.querySelector('main')
  const title = document.createElement('h1')
  const quote = document.createElement('p')
  const boatImg = new Image();
  const container = document.createElement('div')
  const contentCont = document.createElement('div')
  const button = document.createElement('button')

  main.innerHTML = ''

  button.innerHTML = 'Reservations'
  button.classList.add('reservButton')
  title.innerHTML = 'Make Your Reservations Now!'
  title.classList.add('title')
  quote.innerHTML = "The Odin's Restaurant is an easy place to enter but a hard place to leave..."
  quote.classList.add('quote')
  container.classList.add('container')
  contentCont.classList.add('contentCont')
  contentCont.appendChild(title)
  contentCont.appendChild(quote)
  contentCont.appendChild(button)
  boatImg.src = Boat
  boatImg.classList.add('boatImg')
  container.appendChild(boatImg)
  container.appendChild(contentCont)

  

  main.appendChild(container)
  document.body.appendChild(main)
}