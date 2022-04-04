let board = [
    ["+", "-", "-", "-", "-", "-", "+"],
    ["|", " ", "*", " ", "*", " ", "|"],
    ["|", " ", " ", "*", " ", " ", "|"],
    ["|", " ", " ", "*", " ", " ", "|"],
    ["|", " ", " ", " ", " ", " ", "|"],
    ["+", "-", "-", "-", "-", "-", "+"],
  ];
  
  const printBoard = (arr) => {
    arr.forEach((item) => console.log(item.join("")));
  };
  
  const validateBoard = (arr) => {
    // Check the length of rows first
    // if rows length are different, display error msg and return
    // if rows length is the same, then check rows items value
    for (i = 0; i < arr.length; i++) {
      // check row length
      if (arr[i].length < arr[i++].length || arr[i].length > arr[i++].length) {
        console.log("ALERT!!! The board is not valid. It's not a rectangle.");
        return;
        // check row items value
      } else {
        for (j = 0; j < board[i].length; j++) {
          if (
            board[i][j] != "+" &&
            board[i][j] != "|" &&
            board[i][j] != "-" &&
            board[i][j] != "*" &&
            board[i][j] != " "
          ) {
            console.log(
              "ALERT!!! The board is not valid. The board values are incorrect."
            );
            return;
          } else console.log("The board is valid.");
        }
      }
    }
  };
  
  const insertNumbers = (arr) => {
    for (i = 1; i < arr.length - 1; i++) {
      for (j = 1; j < arr[i].length - 1; j++) {
        let currPos = arr[i][j];
  
        let possibleStarPositions = [
          arr[i][j + 1],
          arr[i][j - 1],
          arr[i - 1][j - 1],
          arr[i - 1][j],
          arr[i - 1][j + 1],
          arr[i + 1][j - 1],
          arr[i + 1][j],
          arr[i + 1][j + 1],
        ];
  
        let counter = 0;
  
        if (currPos == " ") {
          possibleStarPositions.forEach((item) => {
            if (item == "*") counter++;
          });
  
          currPos = counter;
          arr[i][j] = currPos;
        }
      }
    }
    return arr;
  };
  
  printBoard(board);
  validateBoard(board);
  let newB = insertNumbers(board);
  printBoard(newB);