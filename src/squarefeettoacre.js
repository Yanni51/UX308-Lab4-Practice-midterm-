export function squarefeettoacre(squareFeet){
    // processing
    const squarefeettoacre = 43560
    let acres = squareFeet / squarefeettoacre

    // output
    return acres
}

// dev test
if (import.meta.main){
    console.log(`squarefeettoacre(43560)= ${squarefeettoacre(43560)}`)
    console.log(`squarefeettoacre(87120)= ${squarefeettoacre(87120)}`)
    console.log(`squarefeettoacre(10000)= ${squarefeettoacre(10000)}`)
}