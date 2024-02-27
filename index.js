const add= (num1 , num2)=>{
    return num1 + num2;
  }
  
  const substract= (num1 , num2)=>{
      return num1 - num2;
    }
  
    const multply= (num1 , num2)=>{
      return num1 * num2;
    }
  
    const divide= (num1 , num2)=>{
      if(num2 !== 0 ){
      return num1 / num2;
  }
    }


    const calculate = (num1, num2, operation)=>{
        switch(operation){
            case "+":
                return add(num1,num2);
            case "-":
                return substract(num1, num2);
            case "*":
                return multply(num1*num2); 
            case "/":
                return divide(num1/num2);           
        }
        
          }  

    
const calculator = ()=>{
    const input1 = parseInt(prompt("Please enter the first number:"));

    const operation = prompt('Please enter the operation("+,-,*,/")');

    const input2 = parseInt(prompt("Please enter the second number:"));

    if(isNaN(num1) || isNaN(num2)){
        console.log("please enter a valid number ");

    }

    let result = calculate(a,b,operation);

    console.log(`Result: ${result}`);

}

calculator();
