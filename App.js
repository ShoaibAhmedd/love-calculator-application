import { StatusBar } from 'expo-status-bar';
import React,{useState,useEffect} from 'react';
import {  StyleSheet, Text, View,ScrollView ,Img, Alert} from 'react-native';
import logo from './123.jpg'
import { TextInput,Appbar,Button } from 'react-native-paper';
// import FavoriteIcon from '@material-ui/icons/Favorite';
import DisplayLove from './container/displayLove'

export default function App() {
const[male,setMale]=useState("")
const[female,setFemale]=useState("")
const[love,setLove]=useState("")
const[result,setResult]=useState("")
const submit=()=>{
 
   fetch(`https://love-calculator.p.rapidapi.com/getPercentage?fname=${male}&sname=${female}`,{
    headers:{
      "x-rapidapi-host": "love-calculator.p.rapidapi.com",
      "x-rapidapi-key":"702ddb0317msh58acf457cee67a5p11497cjsnd28f5faedaff",
      "useQueryString": true
    }
  }).then(data=>data.json()).then(dataa=>{
    console.log(dataa)
  setLove(dataa.percentage)
  setResult(dataa.result)
  })




}

if(result){
  var bc= <DisplayLove male={male} female={female} love={love} result={result}/>
}else{
  bc:''
}
  return (
    <View >
      <Appbar.Header>
       <Appbar.Content title="Love % Calculator"  />
    </Appbar.Header>


    <TextInput
    style={{margin:10}}
      label="Person 1 (Male)"
      value={male}
      onChangeText={text => setMale(text)}
    />
    <TextInput
     style={{margin:10}}
      label="Person 2 (Female)"
      value={female}
      onChangeText={text => setFemale(text)}
    />
   <Button 
   style={{margin:20}}
   icon="heart" mode="contained" onPress={() => submit()}>
    Calculate Love
  </Button>

 {bc}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  
    
    
  },
  
});
