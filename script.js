$(document).ready(function() {

let imageArray = [];
let computerChoice;
let userChoice;
let resultOption = ["Win", "Lose", "Draw"];
let result;
let userScore = 0;
let computerScore = 0; 

// Extract image sources into the imageArray
$('.click-image').each(function () {
    imageArray.push($(this).attr('src'));
});

// Function to display the user's choice
function displayImage(imageSrc) {
    userChoice = '<img src="' + imageSrc + '" alt="Selected Image">';
    $('#user-choice').html(userChoice);
}

// Function to have the computer make a choice
function computerChoose() {
    let randomIndex = Math.floor(Math.random() * imageArray.length);
    let computerChoiceSRC = imageArray[randomIndex];
    computerChoice = '<img src="' + computerChoiceSRC + '" alt="Computer Choice">';
    $('#computer-choice').html(computerChoice);
}

// Function to determine the result
function getResult() {
    let userChoiceSRC = $(userChoice).attr('src');
    let computerChoiceSRC = $(computerChoice).attr('src');
    if (userChoiceSRC === computerChoiceSRC) {
        result = resultOption[2];
    } else if (
        (computerChoiceSRC === imageArray[0] && userChoiceSRC === imageArray[1]) ||
        (computerChoiceSRC === imageArray[1] && userChoiceSRC === imageArray[2]) ||
        (computerChoiceSRC === imageArray[2] && userChoiceSRC === imageArray[0])
    ) {
        result = resultOption[0];
    } else if (
        (computerChoiceSRC === imageArray[0] && userChoiceSRC === imageArray[2]) ||
        (computerChoiceSRC === imageArray[1] && userChoiceSRC === imageArray[0]) ||
        (computerChoiceSRC === imageArray[2] && userChoiceSRC === imageArray[1])
    ) {
        result = resultOption[1];
    }
    $("#result-display").html(result);
}

// Function to update the scores
function getScore() {
    if (result === resultOption[0]) {
        userScore++;
    } else if (result === resultOption[1]) {
        computerScore++;
    }
    $("#userscore").html(userScore);
    $("#computerscore").html(computerScore);
}

// Function to reset scores
function resetScores() {
    location.reload();
}

function handleImageClick() {
    let imageIndex = $(this).index('.click-image');
    displayImage(imageArray[imageIndex]);
    computerChoose();
    getResult();
    getScore();
}

$('#reset').click(resetScores);// Click event handler for the #reset element
$('.click-image').click(handleImageClick);// Click event handler for .click-image elements

});
