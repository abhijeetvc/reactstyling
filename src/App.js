import {useState} from 'react'
// import styles from './style.module.scss'
import styled from 'styled-components'

const Button=styled.button`
cursor: pointer;
border: 2px solid tomato;
min-width: 70px;
background: transparent;
padding: 10px;
transition: all 0.1s ease-in;

&:hover {
    background: yellowgreen;
    color: yellow;
} `;

function App() {
  const[fruits,setFruits]=useState([
     {id:'1',name:"Apple",isFavourite:true},
     {id:'2',name:"Orange",isFavourite:false},
     {id:'3',name:"Banana",isFavourite:false},
     {id:'4',name:"Grapes",isFavourite:false}
  ])

  function handleChange(item){
    console.log(item)
      const newFruits=fruits.map((fruit)=>{
        if(fruit.id===item.id){ //identical
          return{
            id:fruit.id,
            name:fruit.name,
            isFavourite:!fruit.isFavourite
          }
        }else{
          return fruit
        }
      })
      setFruits(newFruits)
  }

  return (
      <div>
          <h2>Cart without styling</h2>
          <Cart items={fruits} onClick={handleChange}/>
      </div>
  );
}

function Cart({items,onClick}){
    return(
      <ul className="unordered-list">
          {   
            items.map((item)=>(
            <li key={item.id} className="list-item">
                {item.name}
                <Button type="button" onClick={()=>onClick(item)}>
                   {item.isFavourite?"Unlike":"Like"}
                </Button>
            </li>
          ))}
      </ul>
    )
}

export default App;
