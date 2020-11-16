import ColorsList from './ColorsList';

function getRandomAnswer() {
    return Math.floor(Math.random() * 20);
}

function getRandomColor() {
    const randNum = Math.floor(Math.random() * ColorsList.length)
    return ColorsList[randNum]
}

function newBoxBoard(numBoxes) {
    let newBoard = []
    while(newBoard.length < numBoxes){
        const randColor = getRandomColor();
        if(!newBoard.includes(randColor)){
            newBoard.push(randColor);
        }
    }
    return newBoard;
}

function getRandomIdx(num) {
    return Math.floor(Math.random() * 16);
}

export { getRandomAnswer, getRandomColor, newBoxBoard, getRandomIdx }