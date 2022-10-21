//variables// 
const cardTop = document.getElementById('card-top');
const cardBottom = document.getElementById('card-bottom');

//show card on click//
if(cardTop) {
    cardTop.addEventListener('click', () => {
        cardBottom.classList.add('show')
    })
}


