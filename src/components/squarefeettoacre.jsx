import{Text, View} from "react-native"

import { squarefeettoacre } from "../squarefeettoacre.js"

export function squarefeettoacre(squareFeet){
    let acres = squareFeet / squarefeettoacre
    return(
    <view>
    <Text>43560 sqft = {sqftToAcres(43560)} acres</Text>
    <Text>87120 sqft = {sqftToAcres(87120)} acres</Text>
    <Text>21780 sqft = {sqftToAcres(21780)} acres</Text>  
    </view>
        )
}