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

let arrNumKeys=['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\','DEL','CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/','🠥' ,'Shift', 'Ctrl', 'WIN', 'Alt', ' ', 'Alt', 'Ctrl', '🠤', '🠧','🠦'];
let arrCode=['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete','CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', 'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash','ArrowUp','ShiftRight', 'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight'];
let arrRu=['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\','DEL','CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', "э", 'Enter', 'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '/','🠥' ,'Shift', 'Ctrl', 'WIN', 'Alt', ' ', 'Alt', 'Ctrl', '🠤', '🠧','🠦'];

localStorage.setItem('arrEn',JSON.stringify(arrNumKeys));
localStorage.setItem('arrRu',JSON.stringify(arrRu));
let arrEnLocalSt=arrEnLocalSt=localStorage.getItem('arrEn');
arrEnLocalSt=JSON.parse(arrEnLocalSt);
let flag=false;



function buildKeyboard(){
    let board='';
    
    for(let i=0;i<arrEnLocalSt.length;i++){
        
            if(arrEnLocalSt[i]==='Backspace'||arrEnLocalSt[i]==='CapsLock'||arrEnLocalSt[i]==='Enter'||arrEnLocalSt[i]==='Shift'){
                if(i==14||i==29||i==42||i==55){
                    board+='<div class="clearBlock"></div>'
                }
                board+=`<div class="keyBcs">${arrEnLocalSt[i]}</div>`;
            }else if(arrEnLocalSt[i]===' '){
                if(i==14||i==29||i==42||i==55){
                    board+='<div class="clearBlock"></div>'
                }
                board+=`<div class="keyBcsSpace">${arrEnLocalSt[i]}</div>`;
            }else{
                if(i==14||i==29||i==42||i==55){
                    board+='<div class="clearBlock"></div>'
                }
                board+=`<div class="keyB">${arrEnLocalSt[i]}</div>`;
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

let btnKeys=document.querySelectorAll('.keyB, .keyBcs, .keyBcsSpace');

let textArea=document.querySelector('.blockTextarea');
let textPress=[];


btnKeys.forEach((val)=>{
    val.addEventListener('click',function(){
        if(val.textContent.length===1||val.textContent==='🠥'||val.textContent==='🠤'||val.textContent==='🠧'||val.textContent==='🠦'){
            textPress.push(val.textContent);
           
        }
        if(val.textContent==='Backspace'){
            textPress.pop();
        }
        if(val.textContent==='Tab'){
            textPress.push('\t');
        }
        if(val.textContent==='CapsLock'){
            document.querySelectorAll('.keyB').forEach((val)=>{
                if(val.textContent.length===1 && val.textContent !==val.textContent.toLocaleUpperCase()){
                    val.textContent=val.textContent.toLocaleUpperCase();
                }else  if(val.textContent.length===1 && val.textContent !==val.textContent.toLocaleLowerCase()){
                    val.textContent=val.textContent.toLocaleLowerCase();
                }

            })
        }



        textArea.textContent=textPress.join('')
    })
})




document.onkeydown=function(event){
    
    

    if(event.code==='ShiftLeft') flag=true;
    if(flag&&event.code==='AltLeft'){
        let arrRuLocalSt=localStorage.getItem('arrRu');
        arrRuLocalSt=JSON.parse(arrRuLocalSt);
        let textBtnK=document.querySelectorAll('.keyB, .keyBcs, .keyBcsSpace');
        if(textBtnK[0].textContent !==arrRuLocalSt[0]){
            for(let i=0;i<arrRuLocalSt.length;i++){ 
                if( textBtnK[i].getAttribute('data')!=='ArrowUp'||textBtnK[i].getAttribute('data')!=='ArrowLeft'||textBtnK[i].getAttribute('data')!=='ArrowDown'||textBtnK[i].getAttribute('data')!=='ArrowRight'){
                    textBtnK[i].textContent=arrRuLocalSt[i];
                }   
            }

        }else{
            flag=false;
            for(let i=0;i<arrEnLocalSt.length;i++){
                if( textBtnK[i].getAttribute('data')!=='ArrowUp'||textBtnK[i].getAttribute('data')!=='ArrowLeft'||textBtnK[i].getAttribute('data')!=='ArrowDown'||textBtnK[i].getAttribute('data')!=='ArrowRight'){
                    textBtnK[i].textContent=arrEnLocalSt[i];
                }
                
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
    if(event.code==='ArrowUp'){
        textPress.push('🠥')
    }
    if(event.code==='ArrowLeft'){
        textPress.push('🠤')
    }
    if(event.code==='ArrowDown'){
        textPress.push('🠧')
    }
    if(event.code==='ArrowRight'){
        textPress.push('🠦')
    }
    if(event.code==='Enter'){
        textPress.push('\n')
    }
    if(event.code==='Tab'){
        textPress.push('\t')
    }


    textArea.textContent=textPress.join('')


    document.onkeyup=function(event){
        if(event.code==='Backspace'||event.code==='CapsLock'|| event.code==='ShiftLeft'||event.code==='ShiftRight'||event.code==='Enter'){
            document.querySelector('.keyBcs[data="'+ event.code +'"]').classList.remove('btnActive'); 
    
        }else if(event.code==='Space'){
            document.querySelector('.keyBcsSpace[data="'+ event.code +'"]').classList.remove('btnActive');
        }else{
            let keyBB=document.querySelector('.keyB[data="'+ event.code +'"]');
            keyBB.classList.remove('btnActive');
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
        let keyBY=document.querySelector('.keyB[data="'+ event.code +'"]');
        keyBY.classList.add('btnActive');

    }


};



btnKeys.forEach((val)=>{
    val.addEventListener('mouseover',function(){
        val.classList.add('btnActiveDark');
            val.addEventListener('mousedown',function(){
            val.classList.add('btnActive')
            val.classList.remove('btnActiveDark');
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


