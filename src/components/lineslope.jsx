import {Text, View} from "react-native"

import { lineslope } from "../lineslope.js"

export function lineslope(x1, y1, x2, y2){
    let rise = y2 - y1
    let run = x2 - x1
    let slp = rise / run
    return(
        <view>
      <Text>(0,0) to (10,10) = {slope(0, 0, 10, 10)}</Text>
      <Text>(2,4) to (6,8) = {slope(2, 4, 6, 8)}</Text>
      <Text>(1,5) to (4,1) = {slope(1, 5, 4, 1)}</Text>
        </view>
    )
}