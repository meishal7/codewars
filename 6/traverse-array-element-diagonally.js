function diagonal(arr) {
    let rows = arr.length;
    let columns = arr[0].length;
    let diagonals = rows + columns-1;
    let numofsubarrays = diagonals;
    // create arr with length == numofsubarrays
    let newarr = new Array(numofsubarrays);
                    
    // create empty subarrays
    for(let i = 0; i < numofsubarrays; i++ ){
            newarr[i] = [];
    }

    for(let i =0; i<=arr.length-1; i++){
        for(let j =0; j<=arr[i].length-1; j++){
            let subArrayIndex = i+j;
            newarr[subArrayIndex].push(arr[i][j]);
            }
    }             
                    
    let reversed = newarr.reverse();
    // create one array from array of arrays             
    let oneArr = reversed.reduce((acc, value) => ([...acc, ...value]), []);
    
    return oneArr;

}