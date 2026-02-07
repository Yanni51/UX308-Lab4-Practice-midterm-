export function airquality(aqi){
    // processing
    let quality = ""

    if (aqi <= 50){
        quality = "Good"
    } else if (aqi <= 100){
        quality = "Moderate"
    } else if (aqi <= 150){
        quality = "Unhealthy for Sensitive Groups"
    } else if (aqi <= 200){
        quality = "Unhealthy"
    } else if (aqi <= 300){
        quality = "Very Unhealthy"
    } else {
        quality = "Hazardous"
    }

    // output
    return quality

}
// dev test
if (import.meta.main){
    console.log(`airquality(25)= ${airquality(25)}`)
    console.log(`airquality(120)= ${airquality(120)}`)
    console.log(`airquality(350)= ${airquality(350)}`)
}