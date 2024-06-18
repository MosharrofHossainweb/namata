let input = document.querySelector('.input')
let button = document.querySelector('.button')
let namta = document.querySelector('.namta')
console.log(input,);

button.addEventListener('click',()=>{
    if(input.value=="" ){
        alert('Age value handa')
    }else{
        namta.innerHTML=''
        for(let i=1;i<11;i++){
           namta.innerHTML+= input.value+ ' x ' + i +' = '+i*input.value +'<br>'
        }
    }
})
