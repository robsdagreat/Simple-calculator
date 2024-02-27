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
                return divide(num1/num2);        
        }
        
          }  