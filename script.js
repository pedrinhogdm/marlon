/*let h1_id0 = document.getElementById('id0');
h1_id0.style.background = 'red'

let h1_class = document.getElementsByClassName('class')

h1_class[1].style.fontSize = '100px'
h1_class[2].style.background = 'grey'


function mudar(){
    let cor = document.getElementById('muda').value
    document.body.style.background = cor
    
}

setInterval(()=>{

    let data = new Date();
    let hora = document.getElementById('hora')
    hora.innerHTML = ` ${data.getHours()}:${data.getMinutes()}:${data.getSeconds()} - ${data.getDay()}/${data.getMonth()}/${data.getFullYear()}`;

    if(data.getSeconds() <= 9){
        
        hora.innerHTML = ` ${data.getHours()}:${data.getMinutes()}:0${data.getSeconds()} - ${data.getDay()}/${data.getMonth()}/${data.getFullYear()}`;
    }
},1000)*/
let flag = true
function trocar(){

    
    if(flag){
        document.body.style.background = 'black'
        document.body.style.color = 'white'
        flag = !flag
    }else{
        document.body.style.background = 'white'
        document.body.style.color = 'black'
        flag = !flag
    }
}