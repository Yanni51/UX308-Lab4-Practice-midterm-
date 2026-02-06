//input snow in centemetres
export function snowremoval(cm){
//processing
let equipment= ""
if (cm <=1){
    equipment = "broom"
}
    else if (cm<=8){
    equipment= "shovel"
}else if (cm<=12){
    equipment = "electric snowblower"
}else{
    equipment = "gas snowblower"
}
//output
    return equipment
}
// dev test
if (import.meta.main){
    console.log(`snowremoval(3)= ${snowremoval(3)}`);
    
}
