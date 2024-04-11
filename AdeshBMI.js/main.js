let weight=90;
let height=1.9;

BMIndex=6.93

function calculateBMI(weight, height){ 
 
let BMI= (weight*height)/BMIndex
 
return interpretBMI(BMI)
 
}

function interpretBMI(BMI){
    console.log(BMI)

    if (BMI<18){
        console.log("underweight");
    }
    else if (BMI>=18.5 && BMI<25){
        console.log("normal weight");
    }
    else if (BMI>=25 && BMI<30){
        console.log("overweight");
    }
    else{
        console.log("Obese")
    }
}



calculateBMI(weight, height)

