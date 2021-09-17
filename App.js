import React ,{UseState,UseEffect, useState, useEffect} from 'react'
import {View,Text,Image} from 'react-native';
import axios from 'axios'


const App = () => {
  const [data,setData] = useState([])
  useEffect(()=>{
    axios.get('https://telugu-skillhub-own-music-api-default-rtdb.firebaseio.com/music-api/-MdCU2vPsoSsulYD2akz.json').then(
    res=> setData(res.data))
  },[])
  console.log(data)
  return(
    <View style ={{display:'flex',alignItems:'center'}}>
      <Text style={{ fontSize:24,fontStyle:'italic',fontWeight:'bold',margin:20}}>Latest Songs</Text>
      <View>
        {data.map(song =>
          <View style={{margin:15}}>
            <img src={song.img}/>
            <Text style={{marginBottom:6,marginTop:15,fontSize:24}}>
          Song Name :-   {song.title}
            </Text>
            <Text style={{marginBottom:6,marginTop:15,fontSize:18}}>Singer :- {song.singer}</Text>
            <Text style={{marginBottom:6,marginTop:15,fontSize:18}}>Movie :- {song.movie}</Text>
            <audio controls style={{marginTop:15}}>
              <source src={song.song} type="audio/mp3"/>
            </audio>
            <hr style={{width:340,height:2}}/>
            </View>
          )}
      </View>
    </View>
  )
}

export default App