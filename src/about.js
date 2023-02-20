import Odin from './odin.jpg'

export default function about() {
  const main = document.querySelector('main')
  const title = document.createElement('h1')
  const odin = new Image();
  const about = document.createElement('section')
  const contentDiv = document.createElement('div')
  const content = document.createElement('p')
  odin.src = Odin
  odin.classList.add('odinImage')

  title.innerHTML = 'The All-Father'
  content.innerHTML = "I am the unknown Will, the anger that threatens glory and ruin: Lord of Storms am I, in heaven high and caverns deep."
  contentDiv.classList.add('content')
  contentDiv.appendChild(title)
  contentDiv.appendChild(content)
  about.classList.add('about')
  about.appendChild(odin)
  about.appendChild(contentDiv)

  

  main.innerHTML = ''
  main.appendChild(about)
  document.body.appendChild(main)
}