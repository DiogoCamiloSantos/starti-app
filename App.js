import { StyleSheet } from 'react-native';
import StarterView from './src/starter/StarterView';

export default function App() {
  return (
    <StarterView/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
