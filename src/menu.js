export default function menu() {
    const main = document.querySelector('main')
    const h1 = document.createElement('h1')
    
    main.innerHTML = ''
    h1.innerHTML = 'Menu test'

    main.appendChild(h1)
    document.body.appendChild(main)
  }