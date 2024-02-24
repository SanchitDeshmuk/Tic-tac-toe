let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newGame = document.querySelector("#new-game")
let turn = true;
let winMessage = document.querySelector("#msg");
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

newGame.addEventListener("click",()=>{
    for(let box of boxes){
        box.innerHTML = '';
        box.disabled = false;
    }
    turn = true;
    document.querySelector("#message-container").style.visibility = "hidden";
})

reset.addEventListener("click",()=>{
    for(let box of boxes){
        box.innerHTML = '';
        box.disabled = false;
    }
    turn = true;
    document.querySelector("#message-container").style.visibility = "hidden";
})

for(let box of boxes){
    box.addEventListener("click",()=>{
        if(turn == true){
            box.innerHTML = 'X';
        }
        else{
            box.innerHTML = 'O';
        }
        turn = !turn;
        box.disabled = true;
        checkWinner();
        checkFilled();
    })
}

const checkWinner = ()=>{
    for(let pattern of winPatterns){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        if(pos1 == '' || pos2 == '' || pos3 == ''){
            continue;
        }
        if(pos1 == pos2 && pos2 == pos3){
            document.querySelector("#message-container").style.visibility = "visible";
            winMessage.innerHTML = "Winner of the game is "+pos1;
            disableBoxes();
            return;
        }
    }
};

const checkFilled = ()=>{
    let full = true;
    for(let i=0;i<boxes.length;i++){
        if(boxes[i].innerText == ""){
            full = false;
            break;
        }
    }
    if(full == true){
        document.querySelector("#message-container").style.visibility = "visible";
        winMessage.innerHTML = "Draw";
    }
};

const disableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}