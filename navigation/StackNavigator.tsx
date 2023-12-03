import * as React from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


export default function App() {
 
   
        return (
            <View style={{flex:1, backgroundColor:'white'}}>
                <Text>You are now logged in</Text>

                <TouchableOpacity onPress={()=> firebase.auth().signOut()}>
                    <Text style={{color:'blue'}}>Log me out</Text>
                </TouchableOpacity>
            </View>
        )
    
}