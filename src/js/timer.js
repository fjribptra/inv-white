const d = document.getElementById('d')
const h = document.getElementById('h')
const m = document.getElementById('m')
const s = document.getElementById('s')

const ketD = document.getElementById('ket-d')
const ketH = document.getElementById('ket-h')
const ketM = document.getElementById('ket-m')
const ketS = document.getElementById('ket-s')

let countDateTime = new Date("June 28,2024 00:00:00" ).getTime()

let x = setInterval(function(){

    let now = new Date().getTime()
    let distance = countDateTime - now
    let days = Math.floor(distance / (1000*60*60*24))
    let hours = Math.floor((distance % (1000*60*60*24)) / (1000*60*60))
    let minutes = Math.floor((distance % (1000*60*60)) / (1000*60))
    let seconds = Math.floor((distance % (1000*60)) / 1000)

    d.innerHTML = days
    h.innerHTML = hours
    m.innerHTML = minutes
    s.innerHTML = seconds

    if(d.innerHTML < 2) {
        ketD.textContent = 'Day'
    } else {
        ketD.textContent = 'Days'
    }

    if(h.innerHTML < 2) {
        ketH.textContent = 'Hour'
    }else {
        ketH.textContent = 'Hours'
    }

    if(m.innerHTML < 2) {
        ketM.textContent = 'Minute'
    }else {
        ketM.textContent = 'Minutes'
    }

    if(s.innerHTML < 2) {
        ketS.textContent = 'Second'
    }else {
        ketS.textContent = 'Seconds'
    }

}, 1000)




