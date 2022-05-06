import './styles.css';
import index2 from './index2';


let blockDiv=document.createElement('div');
blockDiv.textContent='Virtual Keyboard'
blockDiv.className='container';
document.body.appendChild(blockDiv);

let blockTextarea=document.createElement('textarea');
blockTextarea.className='blockTextarea';//rows="4" cols="50" placeholder="Describe yourself here..."
blockTextarea.rows='5';
blockTextarea.cols='50';
blockTextarea.placeholder='Press keyboard...'
blockDiv.appendChild(blockTextarea);

let blockChild=document.createElement('div');
blockChild.className='blockChild';
blockDiv.appendChild(blockChild);


let arrNumKeys=['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\','DEL','CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/','&#129045' ,'Shift', 'Ctrl', 'WIN', 'Alt', ' ', 'Alt', 'Ctrl', '&#129044', '&#129047','&#129046'];
/*let arrCode=[];
document.onkeydown=function(event){
    arrCode.push(event.code);
    console.log(arrCode);*/


function buildKeyboard(){
    let board='';
    for(let i=0;i<arrNumKeys.length;i++){
        if(arrNumKeys[i]==='Backspace'||arrNumKeys[i]==='CapsLock'||arrNumKeys[i]==='Enter'||arrNumKeys[i]==='Shift'){
            if(i==14||i==29||i==42||i==55){
                board+='<div class="clearBlock"></div>'
            }
            board+=`<div class="keyBcs"> ${arrNumKeys[i]} </div>`;
        }else if(arrNumKeys[i]===' '){
            if(i==14||i==29||i==42||i==55){
                board+='<div class="clearBlock"></div>'
            }
            board+=`<div class="keyBcsSpace"> ${arrNumKeys[i]} </div>`;
        }else{
            if(i==14||i==29||i==42||i==55){
                board+='<div class="clearBlock"></div>'
            }
            board+=`<div class="keyB"> ${arrNumKeys[i]} </div>`;
        }
        
    }
    document.querySelector('.blockChild').innerHTML=board;
}
buildKeyboard();

/*document.onkeydown=function(event){
    console.log(event.code)
}*/
