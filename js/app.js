console.log("hola hola");

//objeto Calculadora

//método de inicialización



//#region ===TECLADO/BOTONES===
var tecla = "";
var signo = "";
var num1 = 0;
var num2 = 0;
var iteracion = 1;

PressBotones();

document.onkeypress=pressTecla
//document.onkeydown=mostrarTecla
document.onkeyup=soltarTecla


//====TECLADO===//
function pressTecla(event){
    var teclado = event.which || event.keyCode;

    console.log(num1 + signo +  num2)

    if(teclado==13){
        //alert("es ENTER")

        //console.log("n1: ", num1, " signo: ", signo, " n2: ", num2)
        //console.log(num1 + signo +  num2)
        calcular(num1, num2, signo)

        //num1 = 0;
    }
    else{
        tecla = String.fromCharCode(teclado)

        if(document.images){
            //sconsole.log("es img")
            //console.log("tecla: ", tecla)
    
            //validar si es número
            if(!isNaN(tecla)){
                console.log("es número")
                document.getElementById(tecla).style="width:18%; height: 55px;"
                
                if(iteracion == 1){
                    num1 = tecla;
                    iteracion++;
                }
                else{
                    num2 = tecla;
    
                    //console.log("n1: ", num1, " signo: ", signo, " n2: ", num2)
                    iteracion = 1;
                }
            }
            else{
                console.log("no es número")
                //tomar signo
                signo = tecla
    
    
    
    
                resetPantalla();
    
            }
    
            if(tecla == "."){            
                document.getElementById("punto").style="width:18%; height: 55px;"            
            }
            else if(tecla == "+"){
                document.getElementById("mas").style="width:70px; height: 140px;"            
            }
            else if(tecla == "-"){
                document.getElementById("menos").style="width:70px; height: 55px;"                
            }
            else if(tecla == "*"){
                document.getElementById("por").style="width:70px; height: 60px;"                
            }
            else if(tecla == "/"){
                document.getElementById("dividido").style="width:70px; height: 60px;"                
            }                   
            else{
                //es número
                //document.getElementById(tecla).style="width:18%; height: 55px;"
            }
        }else{
            //console.log("NO es img")
        }
    
        var pantalla = document.getElementById("display");
        var p = pantalla.textContent
    
        //console.log("p: ", p)
    
        if(p.length <8){
            mostrarTeclaPantalla(tecla)
        }
        else{
            alert("ya no es posible más");
        }

        
    }
   

}

function soltarTecla(event){
    
    if(document.images){
        

        if(tecla == "."){
            document.getElementById("punto").style="width:76.98px; height: 62.90px;"
        }
        else if(tecla == "+"){
            document.getElementById("mas").style="width:79px; height: 150x;"
        }
        else if(tecla == "-"){
            document.getElementById("menos").style="width:78px; height: 63px;"
        }
        else if(tecla == "*"){
            document.getElementById("por").style="width:78px; height: 63px;"
        }
        else if(tecla == "/"){
            document.getElementById("dividido").style="width:78px; height: 63px;"
        }
        else{

            document.getElementById(tecla).style="width:76.98px; height: 62.90px;"
        }
        
    }else{
        //console.log("NO es img Soltar")
    }
}


function PressBotones(){

    //====PRESS BOTONES===//
    document.getElementById("on").addEventListener("click", function(){
        //cambiar estilo

        //resetear pantalla
        document.getElementById("display").innerHTML = "0"
    });


    document.getElementById("sign").addEventListener("click", function(){
        //console.log("press +/-")

        var pantalla = document.getElementById("display");
        var p = pantalla.textContent

        console.log("pantalla: ", p)

        if(p != "0"){
            document.getElementById("display").innerHTML = "-" + document.getElementById("display").innerHTML
        }

        if(p.indexOf("-") > -1){
            pantalla.innerHTML = pantalla.innerHTML.substr(2,pantalla.textContent.length - 1)
        }

        
    });

}

//==== MOSTRAR TECLA NUMÉRICA PRESIONADA===//
function mostrarTeclaPantalla(tecla){

    var pantalla = document.getElementById("display");
    var p = pantalla.textContent
    
    //console.log(p)

    if(p.indexOf(".") > -1){
        //console.log("ya no")

        if(tecla != "."){

            if(pantalla.textContent == 0){
                pantalla.innerHTML = tecla
            }
            else{
                pantalla.innerHTML += tecla
            }
        }
    }
    else{
        if(tecla != "+"){
            
            if(pantalla.textContent == 0){
                pantalla.innerHTML = tecla
            }
            else{
                pantalla.innerHTML += tecla
            }
        }
        
    }
   


}

function resetPantalla(){
    //resetear pantalla
    document.getElementById("display").innerHTML = ""
        
}


//#endregion TECLADO/BOTONES



//función calculadora


function calcular(num1, num2, signo){
    var resultado = 0;

    console.log(num1 + signo +  num2)

    switch(signo){
        case "+":
            resultado = Number(num1) + Number(num2); break;
        case "-":
            resultado = Number(num1) - Number(num2); break;
        case "*":
            resultado = Number(num1) * Number(num2); break;
        case "/":
            resultado = Number(num1) / Number(num2); break;
        default: break;

    }

    //alert("res: "  + resultado)

    //mostrar en pantalla
    document.getElementById("display").innerHTML = ""
    mostrarTeclaPantalla(resultado)
}