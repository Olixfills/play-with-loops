//sum calculator with for loop
//get all variables
const userNumber = document.getElementById('user-number');
const calculateBtn = document.querySelector('#calculator button');
const calculatedSum = document.getElementById('calculated-sum');

function addUp() {
    const userInputNumber = userNumber.value;

    let sumUp = 0;

    for (let i = 0; i <= userInputNumber; i++) {

        sumUp = sumUp + i;
    };

    calculatedSum.textContent = sumUp;
    calculatedSum.style.display = 'block';

};


calculateBtn.addEventListener('click', addUp);



//Highlight Section with for of loop

const highlightLinkButton = document.querySelector('#highlight-links button');
const anchorElements = document.querySelectorAll('#highlight-links a')

function highlightLinks() {

    for (const anchorElement of anchorElements) {
        anchorElement.classList.toggle('highlight')
    }
}

highlightLinkButton.addEventListener('click', highlightLinks);



// Data display section with for in loop

const displayUserDataBtn = document.querySelector('#user-data button');
const dummyData = {
    userName: 'Olixfills',
    location: 'Lagos',
    code: 60705991,
    character: 'Ares'
};


function displayData() {
    const outputUserData = document.getElementById('output-user-data');

    outputUserData.innerHTML = '';

    for (const key in dummyData) {
        const userDataListItem = document.createElement('li');
        const outputText = `${key.toUpperCase()}: ${dummyData[key]}`;

        userDataListItem.textContent = outputText;

        outputUserData.append(userDataListItem);

    }


}
displayUserDataBtn.addEventListener('click', displayData);



//Dice stats with while loop

const rollDiceBtn = document.querySelector('#statistics button');
const targetDiceNumber = document.getElementById('user-target-number');
const diceRollsListElement = document.getElementById('dice-rolls');
const outputTotalRolls = document.getElementById('output-total-rolls');
const outputTargetNumber = document.getElementById('output-target-number');

function rollDice(){
    return Math.floor(Math.random() * 6) + 1;

}

function deriveNumberOfDiceRolls(){
    const enteredNumber = targetDiceNumber.value;
    diceRollsListElement.innerHTML = '';

    let hasRolledTargetNumber = false;
    let numberOfRolls = 0;
    
    while(!hasRolledTargetNumber){
        const rolledNumber = rollDice();

        // if(rolledNumber == enteredNumber){

        //     hasRolledTargetNumber = true;
        // }
        const newRollListElement = document.createElement('li');
        const outputText = `Roll ${numberOfRolls + 1}: ${rolledNumber}`;

        newRollListElement.textContent = outputText;
        diceRollsListElement.append(newRollListElement);
        hasRolledTargetNumber = rolledNumber == enteredNumber;
        numberOfRolls++;
    }



    outputTargetNumber.textContent = enteredNumber;
    outputTotalRolls.textContent = numberOfRolls;
}

rollDiceBtn.addEventListener('click', deriveNumberOfDiceRolls);