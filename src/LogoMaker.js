import React from 'react'
import {Image, SafeAreaView} from 'react-native'

const Logo = () => {

    return(
        <SafeAreaView>
            <Image
            source={require('D:/VS Code/Capstone/Capstone/assets/ManhattanLogo.png')}>
            </Image>
        </SafeAreaView>
    );

};

export default Logo;