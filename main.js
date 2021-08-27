
const input=document.getElementById('input');
const submit=document.getElementById('submit');

input.addEventListener('keyup',filterNames);

function filterNames(e){
    let value=input.value.toUpperCase();
    
    const arr=document.querySelectorAll('.contacts a');
    
    arr.forEach((item)=>{
        if(item.innerHTML.toUpperCase().indexOf(value)>-1){
            item.style.display='';
        }else{
            item.style.display='none'
        }
    })


}



