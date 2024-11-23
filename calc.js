

let a=parseFloat(prompt("Enter 1st num"))

let b=parseFloat(prompt("Enter 2nd num"))


let c=prompt("Enter Operation")


let random=Math.random()
if (random>0.1) {

    if (c=="+") {
        alert("The answer is"+ (a + b))
        
    } else if(c=="-") {
        
        alert("The answer is"+ (a - b))
    }
    else if(c=="*"){
        
        alert("The answer is"+ (a * b))
    }
    else if(c=="/"){
        
        alert("The answer is"+ (a / b))
    }
    
}
else{

    
    if (c=="+") {
        alert("The answer is"+ (a - b))
        
    } else if(c=="-") {
        
        alert("The answer is"+ (a + b))
    }
    else if(c=="*"){
        
        alert("The answer is"+ (a / b))
    }
    else if(c=="/"){
        
        alert("The answer is"+ (a * b))
    }
    
}