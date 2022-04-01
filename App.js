import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, View, Image } from 'react-native';
import Componente from './componente/Componente';
import Tabuada from './componente/Tabuada';

export default function App() {
  const [num, setNum] = useState(0);
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={{
          uri: 'https://p2.trrsf.com/image/fget/cf/1200/675/middle/images.terra.com/2022/03/01/the-batman-critica-filme-robert-pattinson.jpeg',
        }}
      />
        <Componente nome="Bruce Wayne" idade="25" />

        <View style={styles.row}>
          <Text style={styles.texto}>NÚMERO</Text>
          <TextInput 
              style={styles.input}
              value={num}
              onChangeText={(value)=>setNum(value)}
          />
        </View>
        <Tabuada num={num} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9EA0D6',
    alignItems: 'center',
    justifyContent: 'center',
  },

  row: {
    width:'100%',
    marginTop:10
  },
  input: {
    width:'80%',
    borderWidth:1,
    marginLeft:'11%',
    fontSize:30,
    borderRadius:6,
    borderColor: '#3D1CFA'
  },
  texto: {
    fontSize:30,
    marginLeft:'10%',
    color: '#1362D4'
  },
  logo:{
    width: 80,
    height: 70,
    margin: 5,
    borderRadius: 20
  }
});
