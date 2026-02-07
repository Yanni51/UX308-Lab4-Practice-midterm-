export function yee_ha(num){
    // processing
    let result = ""

    if (num /3){
        result = "Yee Ha"
    } else if (num /7){
        result = "Yee"
    } else if (num /3 & num /7){
        result = "Ha"
    } else {
        result = "Nada"
    }

    // output
    return result
}

// dev test
if (import.meta.main){
    console.log(`yee_ha(3)= ${yee_ha(3)}`)
    console.log(`yee_ha(7)= ${yee_ha(7)}`)
    console.log(`yee_ha(21)= ${yee_ha(21)}`)
    console.log(`yee_ha(10)= ${yee_ha(10)}`)
}