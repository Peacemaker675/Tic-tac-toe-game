let buttons=document.querySelectorAll('.play-button');
let refreshBtn=document.querySelector('.refresh');
let winText=document.querySelector('.Win-text');
let restart= document.querySelector('.refresh');

let turnX=true;
let winPatterns=[
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6],
];
buttons.forEach((button) => {
  button.addEventListener('click',()=>
  {
    if (turnX) {
      button.innerHTML='x';
      turnX=false;
    }
    
    else{
      button.innerHTML='0'
      turnX=true;
    }
  button.disabled=true;
  checkWinner();
  });
});

const checkWinner=()=>{
  
  for(let pattern of winPatterns){
   
  let valOne=buttons[pattern[0]].innerText;
  let valTwo=buttons[pattern[1]].innerText;
  let valThree=buttons[pattern[2]].innerText;
  if(valOne!=''&&valTwo!=''&&valThree!=''){
       if(valOne===valTwo && valTwo===valThree){
      console.log('winner');
      showWinner(valOne);
        }
       }
    
    }
}

let showWinner = (winner)=>{
  winText.innerText= winner + ' ' + 'is the winner !!';
  
}

restart.addEventListener('click',()=>{
  winText.innerText='';
 buttons.forEach((button)=>{
   button.innerHTML='';
   button.disabled=false;
 })
})