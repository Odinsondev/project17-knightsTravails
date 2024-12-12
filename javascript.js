console.log('Synthax: knightMoves([0, 0], [6, 6]);');

//Creates an array of graph vertices
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

//Finds the array index of a vertex based on the coordinates
function findIndex(coordinatesArray) {
  if (coordinatesArray === undefined) {
    return;
  }

  //Logs an error if coordinates are not on the board
  if (
    coordinatesArray[0] < 0 ||
    coordinatesArray[0] > 7 ||
    coordinatesArray[1] < 0 ||
    coordinatesArray[1] > 7
  ) {
    console.error('Please select valid coordinates');
    return;
  }

  for (i = 0; i < boardArray.length; i++) {
    if (boardArray[i][0].toString() === coordinatesArray.toString()) {
      return i;
    }
  }
}

//Adds adjecent vertices to each vortex
function addEdges() {
  function addEdgesToVertices(arrayIndex) {
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

    //Checks if coordinates are within the board area
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
    addEdgesToVertices(i);
  }
}
addEdges();

//Logs the shortest way to get from one square to another
//by outputting all squares the knight will stop on along the way.
function knightMoves(startCoordinates, endCoordinates) {
  let startVertexIndex = findIndex(startCoordinates);
  let endVertexIndex = findIndex(endCoordinates);

  //Stops the function if findIndex can not find coordinates on theboard
  if (startVertexIndex === undefined || endVertexIndex === undefined) {
    return;
  }

  //Queue array for level order traversal
  const queueArray = [];
  //Adds first element into the queue
  queueArray.push(startVertexIndex);

  //Adds an array of the selected vertex adjecent elements and their path to queue
  function addToQueue(vertex) {
    if (boardArray[vertex][1] !== undefined) {
      let vertexAndPathArray = [];
      //Adds adjecent vertex
      vertexAndPathArray.push(boardArray[vertex][1]);
      //Adds adjecent vertex path i.e. the current vertex with its path
      vertexAndPathArray.push(currentVertexIndexAndPath);
      queueArray.push(vertexAndPathArray);
    }
    if (boardArray[vertex][2] !== undefined) {
      let vertexAndPathArray = [];
      vertexAndPathArray.push(boardArray[vertex][2]);
      vertexAndPathArray.push(currentVertexIndexAndPath);
      queueArray.push(vertexAndPathArray);
    }
    if (boardArray[vertex][3] !== undefined) {
      let vertexAndPathArray = [];
      vertexAndPathArray.push(boardArray[vertex][3]);
      vertexAndPathArray.push(currentVertexIndexAndPath);
      queueArray.push(vertexAndPathArray);
    }
    if (boardArray[vertex][4] !== undefined) {
      let vertexAndPathArray = [];
      vertexAndPathArray.push(boardArray[vertex][4]);
      vertexAndPathArray.push(currentVertexIndexAndPath);
      queueArray.push(vertexAndPathArray);
    }
    if (boardArray[vertex][5] !== undefined) {
      let vertexAndPathArray = [];
      vertexAndPathArray.push(boardArray[vertex][5]);
      vertexAndPathArray.push(currentVertexIndexAndPath);
      queueArray.push(vertexAndPathArray);
    }
    if (boardArray[vertex][6] !== undefined) {
      let vertexAndPathArray = [];
      vertexAndPathArray.push(boardArray[vertex][6]);
      vertexAndPathArray.push(currentVertexIndexAndPath);
      queueArray.push(vertexAndPathArray);
    }
    if (boardArray[vertex][7] !== undefined) {
      let vertexAndPathArray = [];
      vertexAndPathArray.push(boardArray[vertex][7]);
      vertexAndPathArray.push(currentVertexIndexAndPath);
      queueArray.push(vertexAndPathArray);
    }
    if (boardArray[vertex][8] !== undefined) {
      let vertexAndPathArray = [];
      vertexAndPathArray.push(boardArray[vertex][8]);
      vertexAndPathArray.push(currentVertexIndexAndPath);
      queueArray.push(vertexAndPathArray);
    }
  }

  //Creates array of the startVertexIndex and its path (which I designated as itself).
  //Array needed for the while loop.
  let currentVertexIndexAndPath = [];
  currentVertexIndexAndPath.push(startVertexIndex);
  currentVertexIndexAndPath.push(startVertexIndex); //path is same as Vertex at start

  //Traverses the graph in level order until the endVertex
  while (currentVertexIndexAndPath[0] !== endVertexIndex) {
    addToQueue(currentVertexIndexAndPath[0]);
    queueArray.shift();
    currentVertexIndexAndPath = queueArray[0];
  }

  //Console.logs number of moves and path in the required format
  function logAnswer(path) {
    let numberOfMoves = 0;

    //Counts number of moves recursively
    function countMoves(currentVertex) {
      if (currentVertex[0] === currentVertex[1]) {
        return;
      }

      numberOfMoves++;
      countMoves(currentVertex[1]);
    }
    countMoves(path);

    console.log(`You made it in ${numberOfMoves} moves! Here is your path:`);

    let arrayOfReversedPath = [];

    function createPathArray(currentVertex) {
      if (currentVertex[0] === currentVertex[1]) {
        return;
      }

      //boardArray [first number of path array] [first number of that]
      arrayOfReversedPath.push(boardArray[currentVertex[0]][0]);

      createPathArray(currentVertex[1]);
    }
    createPathArray(path);

    arrayOfReversedPath.push(startCoordinates);

    for (let i = arrayOfReversedPath.length - 1; i >= 0; i--) {
      console.log(arrayOfReversedPath[i]);
    }
  }
  logAnswer(currentVertexIndexAndPath);
}
knightMoves([0, 0], [6, 6]);
