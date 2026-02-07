import {Text, View} from "react-native"

import { yee_ha } from "../yee_ha.js"

export function yee_ha(num){
    let result = ""
    return(
        <view>
      <Text>3 = {yee_ha(3)}</Text>
      <Text>7 = {yee_ha(7)}</Text>
      <Text>21 = {yee_ha(21)}</Text>
      <Text>10 = {yee_ha(10)}</Text>
        </view>
    )
}