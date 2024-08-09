let span = document.querySelector("span");
let nav = document.querySelector("nav");
let close = document.querySelector("#close");
nav.style.display = "none";
span.onclick = function(){
    nav.style.display ="block";
};
close.addEventListener("click",()=>{
    nav.style.display ="none";
});





let title= document.querySelector(".title");
let squares =[];
let turn ="x";

function game(id){
    let element =document.getElementById(id);
    if( turn==="x" && element.innerHTML ==""){
        element.innerHTML="x";
        turn="o";
        title.innerHTML="o";

    } else{
        element.innerHTML="o";
        turn="x";
        title.innerHTML ="x";
    }
    winner()
    
}

function winner(){
    for (let i=1;i<10; i++){
        squares[i] = document.getElementById("item"+i).innerHTML;
    }
    if (squares[1]==squares[2] &&squares[2]==squares[3] &&squares[1]!=""){end(1,2,3) }
    else if(squares[4]==squares[5] &&squares[5]==squares[6] &&squares[4]!=""){end(4,5,6);}
    else if(squares[7]==squares[8] &&squares[8]==squares[9] &&squares[7]!=""){end(7,8,9);}
    else if(squares[1]==squares[4] &&squares[4]==squares[7] &&squares[4]!=""){end(1,4,7);}
    else if(squares[2]==squares[5] &&squares[5]==squares[8] &&squares[2]!=""){end(2,5,8);}
    else if(squares[3]==squares[6] &&squares[6]==squares[9] &&squares[3]!=""){end(3,6,9);}
    else if(squares[3]==squares[5] &&squares[5]==squares[7] &&squares[3]!=""){end(3,5,7);}
    else if(squares[1]==squares[5] &&squares[5]==squares[9] &&squares[1]!=""){end(1,5,9);}
    else if (!squares.includes("")) { 
        gameOver();
    }
}

function end(num1,num2,num3){
    title.style.color = "blue";
    title.innerHTML = `${squares[num1]} is winner`;
    
    document.getElementById("item"+ num1).style.backgroundColor="blue";
    document.getElementById("item"+ num2).style.backgroundColor="blue";
    document.getElementById("item"+ num3).style.backgroundColor="blue";

    setInterval(() =>{
        title.innerHTML +=".";
    },1000);
    setTimeout(() =>{
        window.location.reload();
    },4500);

}
function gameOver() {
    title.innerHTML = "Game Over";
    title.style.color = "red"; 
    setInterval(() =>{
        title.innerHTML +=".";
    },1000);
    setTimeout(() => {
        window.location.reload();
    }, 4000);
}

