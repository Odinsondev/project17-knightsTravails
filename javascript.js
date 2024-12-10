function createBoardArray() {
  const boardArray = [];

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      let vertex = [[i, j]];

      boardArray.push(vertex);
    }
  }
  return boardArray;
}
const boardArray = createBoardArray();

function findIndex(coordinatesArray) {
  //might remove if statement later
  if (coordinatesArray === undefined) {
    return;
  }

  for (i = 0; i < boardArray.length; i++) {
    if (boardArray[i][0].toString() === coordinatesArray.toString()) {
      return i;
    }
  }
}

function addEdges() {
  function addEdgesToVortices(arrayIndex) {
    let edgeOneCoordinates = [
      boardArray[arrayIndex][0][0] - 2,
      boardArray[arrayIndex][0][1] + 1,
    ];

    let edgeTwoCoordinates = [
      boardArray[arrayIndex][0][0] - 1,
      boardArray[arrayIndex][0][1] + 2,
    ];

    let edgeThreeCoordinates = [
      boardArray[arrayIndex][0][0] + 1,
      boardArray[arrayIndex][0][1] + 2,
    ];

    let edgeFourCoordinates = [
      boardArray[arrayIndex][0][0] + 2,
      boardArray[arrayIndex][0][1] + 1,
    ];

    let edgeFiveCoordinates = [
      boardArray[arrayIndex][0][0] + 2,
      boardArray[arrayIndex][0][1] - 1,
    ];

    let edgeSixCoordinates = [
      boardArray[arrayIndex][0][0] + 1,
      boardArray[arrayIndex][0][1] - 2,
    ];

    let edgeSevenCoordinates = [
      boardArray[arrayIndex][0][0] - 1,
      boardArray[arrayIndex][0][1] - 2,
    ];

    let edgeEightCoordinates = [
      boardArray[arrayIndex][0][0] - 2,
      boardArray[arrayIndex][0][1] - 1,
    ];

    if (
      edgeOneCoordinates[0] >= 0 &&
      edgeOneCoordinates[0] <= 7 &&
      edgeOneCoordinates[1] >= 0 &&
      edgeOneCoordinates[1] <= 7
    ) {
      boardArray[arrayIndex].push(findIndex(edgeOneCoordinates));
    }

    if (
      edgeTwoCoordinates[0] >= 0 &&
      edgeTwoCoordinates[0] <= 7 &&
      edgeTwoCoordinates[1] >= 0 &&
      edgeTwoCoordinates[1] <= 7
    ) {
      boardArray[arrayIndex].push(findIndex(edgeTwoCoordinates));
    }

    if (
      edgeThreeCoordinates[0] >= 0 &&
      edgeThreeCoordinates[0] <= 7 &&
      edgeThreeCoordinates[1] >= 0 &&
      edgeThreeCoordinates[1] <= 7
    ) {
      boardArray[arrayIndex].push(findIndex(edgeThreeCoordinates));
    }

    if (
      edgeFourCoordinates[0] >= 0 &&
      edgeFourCoordinates[0] <= 7 &&
      edgeFourCoordinates[1] >= 0 &&
      edgeFourCoordinates[1] <= 7
    ) {
      boardArray[arrayIndex].push(findIndex(edgeFourCoordinates));
    }

    if (
      edgeFiveCoordinates[0] >= 0 &&
      edgeFiveCoordinates[0] <= 7 &&
      edgeFiveCoordinates[1] >= 0 &&
      edgeFiveCoordinates[1] <= 7
    ) {
      boardArray[arrayIndex].push(findIndex(edgeFiveCoordinates));
    }

    if (
      edgeSixCoordinates[0] >= 0 &&
      edgeSixCoordinates[0] <= 7 &&
      edgeSixCoordinates[1] >= 0 &&
      edgeSixCoordinates[1] <= 7
    ) {
      boardArray[arrayIndex].push(findIndex(edgeSixCoordinates));
    }

    if (
      edgeSevenCoordinates[0] >= 0 &&
      edgeSevenCoordinates[0] <= 7 &&
      edgeSevenCoordinates[1] >= 0 &&
      edgeSevenCoordinates[1] <= 7
    ) {
      boardArray[arrayIndex].push(findIndex(edgeSevenCoordinates));
    }

    if (
      edgeEightCoordinates[0] >= 0 &&
      edgeEightCoordinates[0] <= 7 &&
      edgeEightCoordinates[1] >= 0 &&
      edgeEightCoordinates[1] <= 7
    ) {
      boardArray[arrayIndex].push(findIndex(edgeEightCoordinates));
    }
  }

  for (let i = 0; i < boardArray.length; i++) {
    addEdgesToVortices(i);
  }
}
addEdges();

console.log(boardArray);

function knightMoves(startCoordinates, endCoordinates) {
  console.log('test');

  let startVertexIndex = findIndex(startCoordinates);
  let endVertexIndex = findIndex(endCoordinates);

  console.log(startVertexIndex);
  console.log(endVertexIndex);

  const queueArray = [];

  function addToQueue(vertex) {
    if (boardArray[vertex][1] !== undefined) {
      queueArray.push(boardArray[vertex][1]);
    }
    if (boardArray[vertex][2] !== undefined) {
      queueArray.push(boardArray[vertex][2]);
    }
    if (boardArray[vertex][3] !== undefined) {
      queueArray.push(boardArray[vertex][3]);
    }
    if (boardArray[vertex][4] !== undefined) {
      queueArray.push(boardArray[vertex][4]);
    }
    if (boardArray[vertex][5] !== undefined) {
      queueArray.push(boardArray[vertex][5]);
    }
    if (boardArray[vertex][6] !== undefined) {
      queueArray.push(boardArray[vertex][6]);
    }
    if (boardArray[vertex][7] !== undefined) {
      queueArray.push(boardArray[vertex][7]);
    }
    if (boardArray[vertex][8] !== undefined) {
      queueArray.push(boardArray[vertex][8]);
    }
  }

  addToQueue(startVertexIndex);
  console.log(queueArray);

  function levelOrderIterative() {
    //If startNode does not exist
    /* if () {
      return;
    } */

    while (queueArray.length > 0) {
      let currentVertex = queueArray[0];
      console.log(currentVertex);
      if (currentNode.left !== null) {
        queueArray.push(currentNode.left);
      }
      if (currentNode.right !== null) {
        queueArray.push(currentNode.right);
      }
      queueArray.shift();
    }
  }
}
knightMoves([0, 0], [2, 1]);
