function IMC(desq){
    let altura=  Number.document.getElementById('altura');
    let peso  = Number.document.getElementById('peso');
    let imc =peso/(altura*2)
        if (imc >=18.5 && imc <=24.9){
        console.log("voce esta saudavel");
        
        }
    
    
    
    if(imc >=25 && imc <=29.9){
        console.log("voce está com sobrepeso")
        
    }
    if(imc >=30 && imc <=34.9){
        console.log("voce está com obesidade nível 1")
    }
    if(imc <=35 && >= 39.9){
        console.log("voce esta com obesidade nível 2")
    }
    if(imc <= 40){
        console.log("voce esta com obesidade nível 3")
    }
    else{
        console.log( 'voce nao esta saudavel' )}
}
