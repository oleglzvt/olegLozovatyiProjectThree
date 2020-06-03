$(document).ready(function(){

    // energy variable
    let energy = 100;
    $('.energy').html(`<p>Your Energy: ${energy}%</p>`);


    // start and play again buttons functionality
    $('.startBtn').on('click', function(e){
        e.preventDefault();
        window.location.href = './gamePage.html';
    })

    // hide all the creatures
    $('.question').hide();
    
    // creatures pool
    let creatures = [
        $('.vampire'),
        $('.werewolf'),
        $('.medusa'),
        $('.djinn'),
        $('.ghost'),
        $('.siren'),
        $('.zombie')
    ]

    // creature functionality
    let index = 0;

    const displayCreature = (index) => {
        $(creatures[index]).show();
        $(creatures[index - 1]).hide();
    }
    displayCreature(index++);

    // correct answer functionality
    $('.correct').on('click', function() {
        setTimeout(function() {
            displayCreature(index++);
            if (index === creatures.length + 1 && energy > 0) {
                window.location.href = './winPage.html';
            }
        }, 1000);
        
    })
    
    // wrong answer functionality
    $('.wrong').on('click', function() {
        energy -= 50;
        $('.energy').html(`<p>Your Energy: ${energy}%</p>`);
        setTimeout(function() {
            displayCreature(index++);
            if (energy === 0) {
                window.location.href = './losePage.html';
            } else {
                displayCreature(index++);
            }
            if (index === creatures.length + 1 && energy > 0) {
                window.location.href = './winPage.html';
            }
        }, 1000);
    })
});