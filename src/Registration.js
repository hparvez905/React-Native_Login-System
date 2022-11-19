import { View, Text,TouchableOpacity,TextInput,StyleSheet } from 'react-native'
import React ,{useState}from 'react';
import {firebase} from '../config';


const Registration = () => {
    const [email,setEmail] =useState('')
    const [password,setPassword]=useState('')
    const [firstName,setFirstName]=useState('')
    const [lastName,setLastName]=useState('')
    const [nid,setNid]=useState('')
    registerUser= async (email,password,firstName,lastName,nid)=>{
        // email verification 
        await firebase.auth().createUserWithEmailAndPassword(email,password)
        .then(()=>{
            firebase.auth().currentUser.sendEmailVerification({
                handleCodeInApp:true,
                url:'https://e-gd-58b2b.firebaseapp.com',

        })
        .then(()=>{
            alert('Verification email sent !')
        }).catch((error) => {
            alert(error.message)
        })
        .then(()=>{
            firebase.firestore().collection('users')
            .doc(firebase.auth().currentUser.uid)
            .set({
                firstName,
                lastName,
                email,
                nid,
                })
            })
            .catch((error)=>{
                alert(error.message)
            })
        
        })
        .catch((error)=>{
            alert(error.message)
        })
    }

  return (
    <View style={style.container}>
      <Text style={{fontWeight:'bold',fontSize:23}}>Register Here</Text>
      <View style={{marginTop:40}}>
        <TextInput
        style={style.TextInput}
        placeholder='First Name'
        onChangeText={(firstName)=> setFirstName(firstName)}
        autoCorrect={false}
        />

        <TextInput
        style={style.TextInput}
        placeholder='Last Name'
        onChangeText={(lastName)=> setLastName(lastName)}
        autoCorrect={false}
        />

    <TextInput
        style={style.TextInput}
        placeholder='Email'
        onChangeText={(email)=> setEmail(email)}
        autoCapitalize='none'
        autoCorrect={false}
        keyboardType='email-address'
        />

    <TextInput
        style={style.TextInput}
        placeholder='Password'
        onChangeText={(password)=> setPassword(password)}
        autoCapitalize='none'
        autoCorrect={false}
        secureTextEntry={true}
        />
         <TextInput
        style={style.TextInput}
        placeholder='Nid'
        onChangeText={(nid)=> setNid(nid)}
        autoCapitalize='none'
        autoCorrect={false}
        secureTextEntry={false}
        />

        

      </View>
      <TouchableOpacity
      onPress={()=>registerUser(email,password,firstName,lastName,nid)}
      style={style.button}>
        <Text style={{fontWeight:'bold',fontSize:22}}
        >Register</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Registration;

const style=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        marginTop:100,
    },
    TextInput:{
        paddingTop:20,
        paddingBottom:10,
        width:400,
        fontSize:20,
        borderBottomWidth:1,
        borderBottomColor:'#000',
        marginBottom:10,
        textAlign:'center'

    },
    button:{
        marginTop:50,
        height:70,
        width:250,
        backgroundColor:'#026efd',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:50,
    }


})