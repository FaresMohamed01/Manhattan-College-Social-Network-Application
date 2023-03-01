import {useState} from '../node_modules/react/index'
import RNRestart from 'react-native-restart';
import { SafeAreaView, Button, Text } from 'react-native'

const LogInButtonMaker = () =>{
    const [buttonText, setButtonText] = useState("Next")
    return(

        <Button
        title={buttonText}
        onPress={()=>setButtonText("NewText")}
        ></Button>

    );

};


export default LogInButtonMaker;