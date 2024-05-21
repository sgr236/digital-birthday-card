document.getElementById('btn-wish').addEventListener('click', function() {
    let wish = prompt('Enter your birthday wish for Gautam Buddha:');
    if (wish) {
        let wishesDiv = document.getElementById('wishes');
        let wishElement = document.createElement('p');
        wishElement.textContent = wish;
        wishesDiv.appendChild(wishElement);
    }
});