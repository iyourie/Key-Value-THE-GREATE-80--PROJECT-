window.alert('press a key')

window.addEventListener('keypress', (e) => {
    document.querySelector('h1').innerHTML = `the key you pressed is : ${e.key}`
    document.querySelector('h3').innerHTML = `its key code is : ${e.keyCode}`
})
