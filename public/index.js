const menu=document.querySelector('#menu');
const details=document.querySelector('#details');

menu.addEventListener('click',()=>{
    if(details.classList.contains('hidden')){
        details.classList.remove('hidden');
    }
    else{
        details.classList.add('hidden');
    }
})