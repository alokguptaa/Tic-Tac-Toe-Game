let currentPlayer = "X";
    let arr = Array(9).fill(null);

    function checkWiner() {
        if(
            (arr[0] !== null && arr[0] == arr[1] && arr[1] == arr[2]) ||
            (arr[3] !== null && arr[3] == arr[4] && arr[4] == arr[5]) ||
            (arr[6] !== null && arr[6] == arr[7] && arr[7] == arr[8]) ||
            (arr[0] !== null && arr[0] == arr[3] && arr[3] == arr[6]) ||
            (arr[1] !== null && arr[1] == arr[4] && arr[4] == arr[7]) ||
            (arr[2] !== null && arr[2] == arr[5] && arr[5] == arr[8]) ||
            (arr[0] !== null && arr[0] == arr[4] && arr[4] == arr[8]) ||
            (arr[2] !== null && arr[2] == arr[4] && arr[4] == arr[6]) 
        ){
            document.write(`Winner is ${currentPlayer}`)
        }
        
    }

function handleClick(el) {
        const id = Number(el.id);
        arr[id] = currentPlayer;
        el.innerText = currentPlayer;
        checkWiner();
        currentPlayer = currentPlayer === "X" ? "0" : "X";
    }