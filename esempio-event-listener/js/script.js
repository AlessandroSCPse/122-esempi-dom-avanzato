const allButtons = document.querySelectorAll('.btn');

for(let i = 0; i < allButtons.length; i++) {
    const thisButton = allButtons[i];

    let x = 1;

    thisButton.addEventListener('click', function() {
        x++;
        this.classList.toggle('blue');
        this.innerHTML = 'Sono stato cliccato ' + x;
    });
}
