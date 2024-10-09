let list = document.querySelectorAll('.item')
let next = document.getElementById('next')
let prev = document.getElementById('prev')

// count = 3
// 0,1,2
let count = list.length //3 itens
let active = 0

// aqui o botão ele remove a classe active da pagina atual
next.onclick = () => {
    let activeOld = document.querySelector('.active');
    activeOld.classList.remove('active');
    // assim que é removido a classe do primeiro item ele atribui para o próximo no caso o item 1
    // saiu do 0 para 1 
    active = active >= count -1 ? 0 : active + 1
    list[active].classList.add('active');
}

prev.onclick = () => {
    let activeOld = document.querySelector('.active');
    activeOld.classList.remove('active');

    active = active <= 0 ? count -1 : active - 1
    list[active].classList.add('active');
    
}