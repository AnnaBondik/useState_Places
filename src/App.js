import { useState } from 'react';
import { data } from './Data';
import './App.css';

function App(){
const [place, setPlace]= useState(data)
console.log(place);

const removePlace=(id)=>{
  let newArray= place.filter(item=> item.id !== id);
  setPlace(newArray);
}
const [i, setPic]= useState(0);
const [info, setInfo]= useState(data);
let newArr= [...info];

const nextPic=(e,index)=>{
  setInfo(newArr);
  const photo= document.querySelectorAll('#photo');
  newArr[index]= place[index];

  setPic((i=>{
    i++;
    if (i>info.length-1){
      i=0;
    }
    return i;
  }))
  photo[index].setAttribute('src', newArr[index].image[i])
}
const previousPic=(e,index)=>{
  setInfo(newArr);
  const photo= document.querySelectorAll('#photo');
  newArr[index]= place[index];

  setPic((i=>{
    i --;
    if(i<0){
      i=info.length-1;
    }
    return i;
  }))
  photo[index].setAttribute('src', newArr[index].image[i])
}


return(
  <div>
    <div>
      <h1>Top {place.length} places I want to visit</h1>
    </div>
    {place.map((x=>{
      const {id, name, image}= x;
      const index= place.indexOf(x);
      return(
        <div key={id}>
          <h2>{id}. {name}</h2>
          <img id="photo" src={image[0]} width="300" alt="place"/>
          <div>
          <button onClick={ (e)=>previousPic(e,index)}>Previous</button>
          <button onClick={(e)=>nextPic(e, index)}>Next</button>
          </div>
          <div>
          <button onClick={()=>removePlace(id)}>Remove place</button>
          </div>
        </div>
      )
    }))}

    <div>
    <button onClick={()=>setPlace([])}>Remove All</button>
    </div>
   
  </div>
)
}

export default App;