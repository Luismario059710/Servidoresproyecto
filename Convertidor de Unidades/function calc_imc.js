function calc_imc()
{
  var altura=document.getElementById("altura").value;
  altura=altura.toString().replace(',','.');
  var alturaMetro=altura/100;
  var peso=document.getElementById("peso").value;
   
  if(altura==""){
      document.getElementById("errorIMC").innerHTML="Por favor, introduce tu altura.";
  }
  else if(altura<0){
      document.getElementById("errorIMC").innerHTML="La altura que ingrese debe ser positiva.";
  }
  else if(altura<20){
      document.getElementById("errorIMC").innerHTML="Ha introducido la altura en metros. 
      Por favor, multipliquela por 100 para introducirla en centimetros.";
  }
  else{
      document.getElementById("errorIMC").innerHTML="";
      if(peso==""){
        document.getElementById("errorIMC").innerHTML="Por favor, introduce tu peso.";
      }
      else if(peso<0){
          document.getElementById("errorIMC").innerHTML="El peso que ingrese debe ser positivo.";
      }
      else{
        document.getElementById("errorIMC").innerHTML="";
         
        /*CALCULO IMC*/
        var alturaCuadrado=alturaMetro*alturaMetro;
        var imc=peso/alturaCuadrado;
        document.getElementById("IMC").value=Math.round(imc*100)/100;     
        /*CALCULO DESCRIPCION IMC*/
        if(imc<16){
          document.getElementById("IMCdemedidado").value="Delgadez Severa";    
        }
        else if(imc<17){
          document.getElementById("IMCdemedidado").value="Delgadez Moderada";    
        }
        else if(imc<18.5){
          document.getElementById("IMCdemedidado").value="Delgadez Aceptable";   
        }
        else if(imc<25){
          document.getElementById("IMCdemedidado").value="Peso Normal";    
        }
        else if(imc<30){
          document.getElementById("IMCdemedidado").value="Sobrepeso";    
        }
        else if(imc<35){
          document.getElementById("IMCdemedidado").value="Obeso: Tipo I";    
        }
        else if(imc<40){
          document.getElementById("IMCdemedidado").value="Obeso: Tipo II";   
        }
        else if(imc>=40){
          document.getElementById("IMCdemedidado").value="Obeso: Tipo III";    
        }
      }
  }
}