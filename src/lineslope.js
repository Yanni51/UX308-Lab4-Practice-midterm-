export function lineslope(x1, y1, x2, y2){
    // processing
    let rise = y2 - y1
    let run = x2 - x1
    let slp = rise / run

    // output
    return slp
}

// dev test
if (import.meta.main){
    console.log(`lineslope(0,0,10,10)= ${lineslope(0,0,10,10)}`)
    console.log(`lineslope(2,4,6,8)= ${lineslope(2,4,6,8)}`)
    console.log(`lineslope(1,5,4,1)= ${lineslope(1,5,4,1)}`)
}