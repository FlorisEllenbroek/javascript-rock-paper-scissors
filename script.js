let player1Choice = null;
let player2Choice = null;

document.querySelectorAll('.choice').forEach(choice => {
    choice.addEventListener('click', function () {
        const selectedChoice = this.dataset.choice;

        if (!player1Choice) {
            player1Choice = selectedChoice;
            document.getElementById('title').textContent = 'Speler 2, kies je optie';
        } else {
            player2Choice = selectedChoice;
            document.getElementById('title').textContent = 'Speler 1, kies je optie';
            document.getElementById('result').textContent = determineWinner(player1Choice, player2Choice);
            player1Choice = null;
            player2Choice = null;
        }
    });
});

function determineWinner(choice1, choice2) {
    let result;
    if (choice1 === choice2) {
        result = 'Gelijkspel!';
    } else if ((choice1 === 'steen' && choice2 === 'schaar')
        || (choice1 === 'papier' && choice2 === 'steen')
        || (choice1 === 'schaar' && choice2 === 'papier')) {
        result = 'Speler 1 wint!';
    } else {
        result = 'Speler 2 wint!';
    }

    document.body.innerHTML = '';

    const resultElement = document.createElement('h1');
    resultElement.textContent = result;

    document.body.appendChild(resultElement);
}
