let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset-btn");
let newbtn=document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnO = true;
const winpatterns=[
    [0,1,2],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8]
]



const resetgame=()=>{
    turnO=true;
    enablebtns();
    msgcontainer.classList.add("hide");

}

boxes.forEach((box) => {
    box.addEventListener("click",() =>{
       
        if (turnO){
            box.innerText="O";
            turnO=false;
        }else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        
        checkWinner();
    })

    
})
const enablebtns=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}



const disabledbtns=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const showWinner=(winner)=>{
   msg.innerText=`Congragulation , Winner is ${winner}`;
   msgcontainer.classList.remove("hide");
   disabledbtns();
}


const checkWinner=()=>{
    for (let patterns of winpatterns){
        let pos1val=boxes[patterns[0]].innerText;
        let pos2val= boxes[patterns[1]].innerText;
        let pos3val=boxes[patterns[2]].innerText;


        if(pos1val !="" && pos2val !="" && pos3val !=""){
                    if(pos1val===pos2val && pos2val===pos3val){
                        
                        showWinner(pos1val);
                    }
        }

    }

  
};


newbtn.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);