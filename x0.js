let boxs = document.querySelectorAll(".box");
let resetbut = document.querySelector(".reset");
let newbut = document.querySelector(".new-but");
let msgcon = document.querySelector(".msg-con");
let msg = document.querySelector("#msg");

let turn0 = true;

const winpatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetgame = () => {
    turn0 = true;
    enbox();
    msgcon.classList.add("hide");
};


boxs.forEach((box) => {
    box.addEventListener("click",() => {
        console.log("box was clicked")
        if (turn0){
            box.innerText = "0";
            box.style.color = "red"
            turn0 = false;
        } else {
            box.innerText = "x";
             box.style.color = "green"
            turn0 = true;

        }
        box.disabled = true;
        checkwiner();
    });
});



const disbox = () => {
    for(let box of boxs){
        box.disabled = true;
    }
};

const enbox = () => {
    for(let box of boxs){
        box.disabled = false;
        box.innerText = "";
    }
};


const showwinner = (winner) => {
    msg.innerText = "player $(winner)";
    msgcon.classList.remove("hide");
    disbox();
}

const checkwiner = () => {
    for (let pattern of winpatterns ){

                let pos1val = boxs[pattern[0]].innerText;
                let pos2val = boxs[pattern[1]].innerText;
                let pos3val = boxs[pattern[2]].innerText;

                if (pos1val !="" && pos2val !="" && pos3val !="" ){
                    if (pos1val === pos2val && pos2val === pos3val){
                        console.log("winner",pos1val);
                        showwinner(pos1val);
                    }
                }
    }


};

resetbut.addEventListener("click",resetgame)
newbut.addEventListener("click",resetgame)