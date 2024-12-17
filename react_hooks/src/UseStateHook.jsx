import React, { useState } from 'react'

export default function UseStateHook() {
    const [count,setCount]=useState(0)
const [carInfo,setCarInfo]=useState({})
    const car = {
        name:'mercedese',
        color:'black',
        model:2022,
    }

    const handleCount =()=>{
        setCount(count+1)
        console.log(count);
    }
    
const handleModel=()=>{
    setCarInfo({...car,model:2024,})
}
    
  return (
    <div>
        useState hook : 
        <button onClick={handleCount}>{count}</button>
        <div>
        <p>Car Info:</p>
        <p>Name: {carInfo.name || car.name}</p>
        <p>Color: {carInfo.color || car.color}</p>
        <p>Model: {carInfo.model || car.model}</p>
        <button onClick={handleModel}>Change Model</button>
        </div>
    </div>
  )
  
}


// import React, { useState } from 'react';

// export default function UseStateHook() {
//   const [count, setCount] = useState(0);
//   const [carInfo, setCarInfo] = useState({});

//   const car = {
//     name: 'Mercedes',
//     color: 'Black',
//     model: 2022,
//   };

//   const handleCount = () => {
//     setCount(count + 1);
//     console.log(count);
//   };

//   const handleModel = () => {
//     setCarInfo({
//       ...car, 
//       model: 2024, 
//     });
//   };

//   return (
//     <div>
//       <div>
//         useState hook: <button onClick={handleCount}>{count}</button>
//       </div>
//       <div>
//         <p>Car Info:</p>
//         <p>Name: {carInfo.name || car.name}</p>
//         <p>Color: {carInfo.color || car.color}</p>
//         <p>Model: {carInfo.model || car.model}</p>
//         <button onClick={handleModel}>Change Model</button>
//       </div>
//     </div>
//   );
// }
