let userScore=0;
let compScore=0;
let choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");


const userscorepara=document.querySelector("#user-score");

const computerscore=document.querySelector("#computer-score");
const drawgame=()=>
{
 
  msg.innerText="Draw ";
  msg.style.backgroundColor="#081b31";
};


const showWinner=(userWin,userChoice,compchoice)=>
{       
    if(userWin){
        userScore++;
        userscorepara.innerText= userScore;
       msg.innerText=`You win! Yours ${userChoice} beats ${compchoice} `;
       msg.style.backgroundColor="green";
    }else{
        compScore++;
        computerscore.innerText= compScore;
     
             msg.innerText=`You losse! ${compchoice} beats Yours ${userChoice}`;
             msg.style.backgroundColor="red";
    }

};




const gencompchoice=()=>{
    const options=["rock","paper","scissors"];
    const randomIdx=Math.floor(Math.random() * 3);
    return options[randomIdx];
};


const playgame=(userChoice)=>{
  
     const compchoice=gencompchoice();
   


     if(userChoice===compchoice){
        drawgame(); 
     }else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=compchoice==="paper"?false:true;
        }else if(userChoice==="paper"){
            userWin=compchoice==="scissors" ? false:true;
        }else{
            userWin=compchoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compchoice);
     }
};

choices.forEach((choice)=>{
 
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
      
        playgame(userChoice);
    });
});







