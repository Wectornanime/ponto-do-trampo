import { SafeAreaView } from 'react-native';
import MainRouter from './src/router/main.router';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <MainRouter />
    </SafeAreaView>
  );
};
