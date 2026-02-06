import {Hello} from './Hello.jsx';
import { snowremoval } from './snowremoval.jsx';
import {
  View,
} from 'react-native';

export default function App() {
  return (
    <View>
      <Hello name="Rich" />
      <Hello />
      <Hello name="Biff" />
      <snowremoval cm={3} />
    </View>
  );
}

