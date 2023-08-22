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