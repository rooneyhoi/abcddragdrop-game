const originArray = ['A', 'B', 'C', 'D', 'E'];
const stateArray = [...originArray];
let count = 0;

// Rules and close button event handlers 
const restartBtn = document.getElementById('retart-btn');
const message = document.getElementById('message');
restartBtn.addEventListener('click', startGame);

// Handling boxes drag and drop events
const boxes = document.querySelectorAll(".box");

function startGame(){  
  message.classList.remove('show');  
  mixAlphabet();
  mixBoxesContent();
}

function mixAlphabet(){
  for (let i = stateArray.length-1; i > 0; i--){
    const randomIndex = Math.floor(Math.random() * i);
    console.log(i, randomIndex);
    switchStateArrayValue(i, randomIndex);
  }
  console.log('Start the game data: ', stateArray);
}

function switchStateArrayValue(firstIndex, secondIndex){
  console.log('test');
  const temporaryValue = stateArray[firstIndex];
  stateArray[firstIndex] = stateArray[secondIndex];
  stateArray[secondIndex] = temporaryValue;
}

// Add mixed array content to the boxes
function mixBoxesContent(){
  for (var k = 0; k < stateArray.length; k++){
    boxes[k].querySelector("span").textContent = stateArray[k].toString();
  }
}

startGame();

// Add event to the box elements
boxes.forEach(boxElement => {
  boxElement.addEventListener("dragstart", dragStart);
  boxElement.addEventListener("dragenter", dragEnter);
  boxElement.addEventListener("dragover", dragOver);
  boxElement.addEventListener("dragleave", dragLeave);
  boxElement.addEventListener("dragend", dragEnd);
  boxElement.addEventListener("drop", drop);
});

function dragStart(ev){
  console.log('user starts to drag an element...')
  ev.target.classList.add("drag-start");
  ev.dataTransfer.setData("text", ev.target.id);
}

function dragEnter(ev){
  console.log('the dragged element enters the drop target...')
  if(!ev.target.classList.contains("drag-start")) {
    ev.target.classList.add("drag-enter");
  }
}

function dragOver(ev){
  console.log('the dragged element is over the drop target...')
  ev.preventDefault();
}

function dragLeave(ev){
  console.log('the dragged element leaves the drop target...')
  ev.target.classList.remove("drag-enter");
}

function dragEnd(ev){
  console.log('user has finished dragging the element...');
  ev.target.classList.remove("drag-start");
}

function drop(ev) {
  console.log('the dragged element is dropped on the drop target...');
  ev.preventDefault();
  ev.target.classList.remove("drag-enter");

  // get data of source and target
  const sourceBoxId = ev.dataTransfer.getData("text");
  const targetBoxId = ev.target.id;

  console.log(sourceBoxId,targetBoxId);

  if(sourceBoxId != targetBoxId){
    // collect the source box ID
    const sourceBox = document.getElementById(sourceBoxId);

    // collect the target box data and save to variables
    const targetBackground = ev.target.style.backgroundColor;
    const targetContent = ev.target.querySelector("span").textContent;

    // change the background color and span text content of the TARGET box
    ev.target.style.backgroundColor = sourceBox.style.backgroundColor;
    ev.target.querySelector("span").textContent = sourceBox.querySelector("span").textContent;
    ev.target.id = sourceBoxId;

    // change the background color and span text content of the SOURCE box
    sourceBox.style.backgroundColor = targetBackground;
    sourceBox.querySelector("span").textContent = targetContent;
    sourceBox.id = targetBoxId;

  }
}

// Check if two alphabet array is linear equal
function checkResult(firstArray, secondArray)
{
  let check = true;  

  // if length is not equal
  if(firstArray.length != secondArray.length){
    console.log('Two array is not equal length, false');
    return "False";
  }
  else
  // comapring each element of array
    for(var i=0; i<firstArray.length; i++) {
      console.log(firstArray[i], secondArray[i]);
      if(firstArray[i]!= secondArray[i]) {
        check = false; 
      }
    }

  return check;
}

function isEqual (){
  // Update the array stateArray with the result of sorting by the player
  for (var k = 0; k < stateArray.length; k++){
    stateArray[k] = boxes[k].querySelector("span").textContent;
  }

  console.log(stateArray);

  // Check if user finish the game
  let checkEqual = checkResult(originArray, stateArray);
  console.log('Check player result: ', checkEqual);
  if (checkEqual){
    alert ('You WIN! Play Again');
    startGame();
    // message.classList.add('show');
  }
}

setInterval(isEqual, 2000);