export default function about() {
    const main = document.querySelector('main')
    const h1 = document.createElement('h1')

    main.innerHTML = ''
    h1.innerHTML = 'About test'

    main.appendChild(h1)
    document.body.appendChild(main)
  }