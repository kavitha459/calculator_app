const buttons=document.querySelectorAll('.numbers');
const operators=document.querySelectorAll('.operators');
const inputString=document.querySelector('.input');
const equal=document.querySelector('#result');
const clear=document.querySelector('#clear');
let output='';

buttons.forEach((button) =>{
    button.addEventListener('click',(e) =>{
        if(e.target.innerText=='C'){
            output='';
            inputString.innerText=output;
        }
        else if(e.target.innerText== '='){
            output=eval(output);
        }
        else{
            output+=e.target.innerText;
            console.log(output);
            inputString.innerText=output;
        }
      
    })
})

operators.forEach((operator) =>{
    operator.addEventListener('click',(e) =>{
      output+=e.target.innerText;
      console.log(output);
      inputString.innerText=output;
    })
})

equal.addEventListener('click', () => {
        output=eval(output);
    inputString.innerText=output;
})

clear.addEventListener('click',() =>{
    
})