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
blockDiv.appendChild(blockTextarea);

let blockChild=document.createElement('div');
blockChild.className='blockChild';
blockDiv.appendChild(blockChild);

let blockInformation=document.createElement('p');
blockInformation.className='blockInformation';
blockInformation.textContent='Виртуальная клавиатура создана в операционнной системе Windows';
blockDiv.appendChild(blockInformation);

let blockRuEn=document.createElement('p');
blockRuEn.className='blockInformation';
blockRuEn.textContent='Для переключения языка комбинация: левые Shift + Alt';
blockDiv.appendChild(blockRuEn);

let arrNumKeys=['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\','DEL','CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/','&#129045' ,'Shift', 'Ctrl', 'WIN', 'Alt', ' ', 'Alt', 'Ctrl', '&#129044', '&#129047','&#129046'];
let arrCode=['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete','CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', 'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash','ArrowUp','ShiftRight', 'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight'];

/*document.onkeydown=function(event){
    arrCode.push(event.code);
    console.log(arrCode);
}*/


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
                board+=`<div class="keyB">${arrNumKeys[i]}</div>`;
            }  
    }
    document.querySelector('.blockChild').innerHTML=board;
}
buildKeyboard();

function addData(){
   let child=document.querySelectorAll('.keyB, .keyBcs, .keyBcsSpace');
   for (let i=0;i<arrCode.length;i++){
       if(!(child[i].hasAttribute('data'))){
           child[i].setAttribute('data',arrCode[i])
       }
   }              
}
addData();

let textArea=document.querySelector('.blockTextarea');
let textPress=[];
let flag=false;
let arrRu=['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\','DEL','CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', "э", 'Enter', 'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '/','&#129045' ,'Shift', 'Ctrl', 'WIN', 'Alt', ' ', 'Alt', 'Ctrl', '&#129044', '&#129047','&#129046']
document.onkeydown=function(event){

    if(event.code==='ShiftLeft') flag=true;
    if(flag&&event.code==='AltLeft'){
        flag=false;
        let textBtnK=document.querySelectorAll('.keyB, .keyBcs, .keyBcsSpace');
        if(textBtnK[0].textContent !==arrRu[0]){
            for(let i=0;i<arrRu.length;i++){
                textBtnK[i].textContent=`${arrRu[i]}`;
            }

        }else{
            for(let i=0;i<arrNumKeys.length;i++){
                textBtnK[i].textContent=`${arrNumKeys[i]}`;
            }
        }
      

    }   

    

    if(event.key.length===1){
        textPress.push(event.key);
    }
    if(event.code==='Backspace'){
        textPress.pop()
    }
    if(event.code==='Space'){
        textPress.push('')
    }
    /*if(event.code==='Tab'){
        textPress.push('')
    }*/

    textArea.textContent=textPress.join('');

    //console.log(event.code);
    //console.log(event.key);
    document.onkeyup=function(event){
        if(event.code==='Backspace'||event.code==='CapsLock'|| event.code==='ShiftLeft'||event.code==='ShiftRight'||event.code==='Enter'){
            document.querySelector('.keyBcs[data="'+ event.code +'"]').classList.remove('btnActive'); 
    
        }else if(event.code==='Space'){
            document.querySelector('.keyBcsSpace[data="'+ event.code +'"]').classList.remove('btnActive');
        }else{
            document.querySelector('.keyB[data="'+ event.code +'"]').classList.remove('btnActive');
    
        }
       
    }
    
    if(event.code==='Backspace'||event.code==='CapsLock'|| event.code==='ShiftLeft'||event.code==='ShiftRight'||event.code==='Enter'){
        document.querySelector('.keyBcs[data="'+ event.code +'"]').classList.add('btnActive');
        if(event.code==='CapsLock'){
            document.querySelectorAll('.keyB').forEach((val)=>{
                if(val.textContent.length===1 && val.textContent !==val.textContent.toLocaleUpperCase()){
                    val.textContent=val.textContent.toLocaleUpperCase()
                }else  if(val.textContent.length===1 && val.textContent !==val.textContent.toLocaleLowerCase()){
                    val.textContent=val.textContent.toLocaleLowerCase()
                }

            })
        } 

    }else if(event.code==='Space'){
        document.querySelector('.keyBcsSpace[data="'+ event.code +'"]').classList.add('btnActive');
    }else{
        document.querySelector('.keyB[data="'+ event.code +'"]').classList.add('btnActive');

    }

  



};


let btnKeys=document.querySelectorAll('.keyB, .keyBcs, .keyBcsSpace');
btnKeys.forEach((val)=>{
    val.addEventListener('mouseover',function(){
        val.classList.add('btnActiveDark');
            val.addEventListener('mousedown',function(){
            val.classList.add('btnActive')
            val.classList.remove('btnActiveDark');
            
                textPress.push(val.textContent);
            
            val.addEventListener('mouseup',function(){
                val.classList.remove('btnActive');
                val.classList.add('btnActiveDark');
        })
    
      })
       
    })
    val.addEventListener('mouseout',function(){
        val.classList.remove('btnActiveDark');
    })
})
