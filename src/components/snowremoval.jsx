import{
    Text,
    View,
} from 'react-native'
import{snowremoval} from "../snowremoval.js"
//INPUT
export function snowremoval({cm}){
    let equiptment= snowremoval (cm)
    //output
    return(
    <view>
        <text>
            snowremoval({cm}) returned {equiptment}
        </text>
        </view>
        )
}
