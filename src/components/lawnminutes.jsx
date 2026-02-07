import{Text, View} from "react-native"

import { lawnminutes } from "../lawnminutesjs"

export function lawnminutes(widthM, lengthM, sqmPerMinute){
    let area = widthM * lengthM
    let minutes= area / sqmPerMinute
    return(
    <view>
        <Text>10by10 at 5 sqm/min = {lawnminutes(10, 10, 5)} min </Text>
      <Text>20by30 at 10 sqm/min = {lawnminutes(20, 30, 10)} min </Text>
      <Text>50by40 at 20 sqm/min = {lawnminutes(50, 40, 20)} min </Text>
    </view>
        
    )
}