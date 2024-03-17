let main = document.querySelector('#main')
let crsr = document.querySelector('.cursor')

main.addEventListener('mousemove', function(debts){
    crsr.style.left = debts.x+'px'
    crsr.style.top = debts.y+'px'
})