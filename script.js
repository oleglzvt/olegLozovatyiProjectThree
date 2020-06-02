$(document).ready(function(){
    
    // energy variable
    let energy = 100;
    $('.energy').text(energy);

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
        $('.leprechaun'),
        $('.ghost')
    ]

    // creature functionality
    let index = 0;

    const displayCreature = (index) => {
        $(creatures[index]).show();
        $(creatures[index - 1]).hide();
    }
    displayCreature(index);

    // strike options functionality
    $('.correct').on('click', function() {
        displayCreature(index++);
    })
    
    $('.wrong').on('click', function() {
        energy -= 50;
        $('.energy').text(energy);
        if (energy === 0) {
            window.location.href = './endPage.html';
        } else {
            displayCreature(index++);
        }
    })
    
    // once there is no more question, display the winning page (doesn't work)
    if (index === 4) {
        window.location.href = './endPage.html';
    }
    
});