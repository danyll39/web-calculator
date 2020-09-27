function calculate(){
    var num1 = parseFloat(document.getElementById("number").value);
    var num2 = parseFloat(document.getElementById("number1").value);
    var calc = document.getElementById("signs").value;
    var answer = document.getElementById("result");
    
    switch(calc){
        case "add":
           answer.value = num1+num2
            break;
        case "subtract":
           answer.value = num1-num2
            break;
        case "multiply":
           answer.value = num1*num2
            break;
        case "divide":
           answer.value = num1/num2
            break;   
    }
}
      
    

    
  
   
        
    
    

