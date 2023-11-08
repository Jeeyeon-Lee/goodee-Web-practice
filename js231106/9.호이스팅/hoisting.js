const btns = document.querySelectorAll('ul li')
console.log(typeof btns)
console.log(btns.length)

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', (event) => {
    console.log(event.target)
    console.log(i)
  })
}
