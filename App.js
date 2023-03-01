import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView} from 'react-native';
import Logo from './src/LogoMaker'
import LogInInput from './src/TextInput';
import LogInButton from './src/LogInButtonMaker'

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      
      <Logo>
      </Logo>

      <LogInInput>
      </LogInInput>

      <LogInButton>
      </LogInButton>

      <StatusBar style="auto" />
    </SafeAreaView>
    
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
