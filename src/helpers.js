function getRandomAnswer() {
    return Math.floor(Math.random() * 20);
}

function getRandomColor(ColorsList) {
    const randNum = Math.floor(Math.random() * ColorsList.length)
    return ColorsList[randNum]
}

function newBoxBoard(numBoxes, ColorsList) {
    let newBoard = []
    while(newBoard.length < numBoxes){
        const randColor = getRandomColor(ColorsList);
        if(!newBoard.includes(randColor)){
            newBoard.push(randColor);
        }
    }
    return newBoard;
}

function getRandomIdx(numBoxes) {
    return Math.floor(Math.random() * numBoxes);
}

export { getRandomAnswer, getRandomColor, newBoxBoard, getRandomIdx }