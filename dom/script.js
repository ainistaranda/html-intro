function displatDate(){
    document.getElementById('demo').innerHTML = Date()
}
document.getElementsByTagName('button')[0]
.addEventListener("click", () => { 
alert('You clicked the button')
})

window.addEventListener('resize', () => {
    document.getElementById('demo').innerHTML = "you resized the window!"
})

window.addEventListener("keydown", (event) => {
    switch(event.key){
        case 'v':
            document.body.style.backgroundColor = 'violet'
            break
        case 'r':
            document.body.style.backgroundColor = 'red'
            break
        case 'w':
            document.body.style.backgroundColor = 'white'
            break
        case 'o':
            document.body.style.backgroundColor = 'orange'
            break
        case 'b':
            document.body.style.backgroundColor = 'blue'
            break
    }
})