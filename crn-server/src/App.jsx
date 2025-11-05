import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import sampleImg from './assets/alien-svgrepo-com (1).svg'
import './App.css'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import Card from './Card.jsx'

// function App() {
//   const [count, setCount] = useState(0)
//   const [name, setName] = useState("Name");
//   const [age, setAge] = useState("Age");

  // return (
    // <>
    //   <div>
    //     <a href="https://vite.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={sampleImg} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>{name}</h1>
    //   <h1>{age}</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <button onClick={()=> setName((name) => " Name is Maduka")}>
    //       Set Name
    //     </button>
    //     <button onClick={()=> setAge((age) => "Age is 21")}>
    //       Set Age
    //     </button>
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </>

    
  // )
      // function App() {
      //   const customer = {
      //     name:"Maduka",
      //     age: 21,
      //     address : "Piliyandala",
      //     Salary : 1000000.0
      //   }
      //   const test = () =>{
      //     alert("Hello World");
      //   }
      //   return(
      //     <>
      //       <h1>Hello</h1>

      //       <ul>
      //         <li>Name: {customer.name}</li>
      //         <li>Age: {customer.age}</li>
      //         <li>Address: {customer.address}</li>
      //         <li>Salary: {customer.Salary}</li>
      //       </ul>
      //       <button onClick={test}>Click Me</button>
      //     </>
      //   )
      // }

      // function App(){
      // const[countries, setCountries] = useState([]);

      //   // const product =[
      //   //   {tittle:"Cabbage", id:1},
      //   //   {tittle:"Onion", id:2},
      //   //   {tittle:"Carrot", id:3},
      //   //   {tittle:"Potato", id:4},
      //   // ];

      //   // const listItems = product.map(product >
      //   //   <li key={product.id}>
      //   //     {product.tittle}
      //   //   </li>
      //   // );
      //   // return(
      //   //   <>

      //   //   <ul>{listItems}</ul>
      //   //   <button onClick={}></button>
          
      //   //   </>
      //   // )

      //   useEffect(() => {
      //     function getData(){
      //     fetch("https://restcountries.com/v3.1/name/sri%20lanka").then((response) => response.json()).then((data) => {
      //       setCountries(data);
      //       console.log(data);
      //     })
      //   }
      //     getData();
      //   }, []);

      //   return(
      //     <>
      //     {
      //       countries.map((countries)=>{
              
      //       })
      //     }
      //     </>
      //   )
      // }
// }

function App(){
  return(
    <>
    <Header></Header>
    <Card></Card>
    <Card></Card>
    <Food></Food>
    <Footer></Footer>
    </>
  );
}

export default App
