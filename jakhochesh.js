// const lox =123321
// const emil =213213
// const aboba =emil+lox
let supergide =document.querySelector('.supergide')
let focus =document.querySelector('input')
function ves() {
    let text=document.createElement('p')
    supergide.appendChild(text)
    text.textContent=`ваш номер карты: ${focus.value}`
    text.style.color='aqua'
}
let buton =document.querySelector('button')
let doter_emil =[123,756,10,'bot']
buton.addEventListener('click',function(d){
    d.preventDefault()
    ves()
})
// if (lox!=emil) {
//     console.log(aboba)
// } else {
    
// }


