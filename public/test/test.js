const text = document.getElementById('out')

const print = (text) => {
    text.innerHTML = `${text.innerHTML}\n${text}`
}

const ground = (ro, l, d, t) => {
    return (ro ) / (2 * Math.PI * l) 
}
