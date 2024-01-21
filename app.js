let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let msg = document.querySelector(".msg");
let msgg = document.querySelector("#msgg");

let turno = true;

const winp = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turno){
            turno = false;
            box.innerText = "O";
        }else{
            turno = true;
            box.innerText = "X";
        }
        box.disabled=true

        checkwin();
    })
})

const showwinner =(winner)=>{
    for(let box of boxes){
        box.disabled=true;
    };
    msgg.innerText = `WINNER IS ${winner}`;
    msg.classList.remove("hide");
}

const checkwin =()=>{
    for(pattern of winp) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 !=""&& pos2 !=="" && pos3!=="") {
            if (pos1==pos2&&pos2==pos3) {
                showwinner(pos1);
            }
        }
    }
}

const enablebox=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const resetg=()=>{
    turno=true;
    enablebox();
    msg.classList.add("hide");
}

reset.addEventListener("click",resetg);