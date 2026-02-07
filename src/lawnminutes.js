export function lawnminutes(widthM, lengthM, sqmPerMinute){
    // processing
    let area = widthM * lengthM
    let minutes = area / sqmPerMinute

    // output
    return minutes
}

// dev test
if (import.meta.main){
    console.log(`lawnminutes(10, 20, 5)= ${lawnminutes(10, 20, 5)}`)
    console.log(`lawnminutes(5, 5, 2)= ${lawnminutes(5, 5, 2)}`)
    console.log(`lawnminutes(50, 30, 10)= ${lawnminutes(50, 30, 10)}`)
}
