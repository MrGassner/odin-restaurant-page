import _ from 'lodash';
import './style.css';
import home from './home.js';
import menu from './menu.js';
import about from './about.js';

function createHeader() {
  const header = document.createElement('header')
  const logo = document.createElement('h1')
  const nav = document.createElement('nav')
  const btnHome = document.createElement('button')
  const btnMenu = document.createElement('button')
  const btnAbout = document.createElement('button')

  logo.innerHTML = "Odin's Restaurant"
  btnHome.innerHTML = 'Home'
  btnMenu.innerHTML = 'Menu'
  btnAbout.innerHTML = 'About'

  btnHome.classList.add('home')
  btnMenu.classList.add('menu')
  btnAbout.classList.add('about')

  nav.appendChild(btnHome)
  nav.appendChild(btnMenu)
  nav.appendChild(btnAbout)
  header.appendChild(logo)
  header.appendChild(nav)
  
  return header
}

document.body.appendChild(createHeader())
document.body.appendChild(document.createElement('main'))
document.querySelector('.home').addEventListener('click', () => home())
document.querySelector('.menu').addEventListener('click', () => menu())
document.querySelector('.about').addEventListener('click', () => about())

home()