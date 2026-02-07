import {Text, View} from "react-native"

import { airquality } from "../airquality.js"

export function airquality(aqi){
    let quality = ""
    return(
        <view>
      <Text>AQI 25 = {airQuality(25)}</Text>
      <Text>AQI 75 = {airQuality(75)}</Text>
      <Text>AQI 125 = {airQuality(125)}</Text>
      <Text>AQI 175 = {airQuality(175)}</Text>
      <Text>AQI 250 = {airQuality(250)}</Text>
      <Text>AQI 350 = {airQuality(350)}</Text>
        </view>
    )
}
