const copyTextDANA = document.getElementById('copyTextDANA')
const copyTextBCA = document.getElementById('copyTextBCA')

const copyButtonDANA = document.getElementById('copyButtonDANA')
const copyButtonBCA = document.getElementById('copyButtonBCA')

const copyTextBCAValue = copyTextBCA.innerHTML
const copyTextDANAValue = copyTextDANA.innerHTML

copyButtonBCA.addEventListener('click', function(){
    copyText(copyTextBCAValue)
})

copyButtonDANA.addEventListener('click', function(){
    copyText(copyTextDANAValue)
})

function copyText(params) {
    let inputElement = document.createElement('input')
    inputElement.setAttribute('value', params)
    document.body.appendChild(inputElement)
    inputElement.select()
    document.execCommand('copy')
    inputElement.parentNode.removeChild(inputElement)

    alert('Copied to clipboard')
}

//! Dissable and Enable Scroll
const html = document.querySelector('html')


function dissableScroll() {
    html.style.scrollBehavior = 'auto'
    scrollTop = window.pageYOffset || document.documentElement.scrollTop
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft

    window.onscroll = function() {
        window.scrollTo(screenTop, screenLeft)
    }

}


function enableScroll() {
    window.onscroll = function() {
    }
    
    html.style.scrollBehavior = 'smooth'
    
    localStorage.setItem('opened', 'true')
}

if(!localStorage.getItem('opened')) {
    dissableScroll()
}