import React, {useEffect, useState} from 'react';
import './App.css';
import { Spin, Space } from 'antd';
import 'antd/dist/antd.css';
import { useForm } from './useForm';
import { Formik } from 'formik';
import { Hello } from './Hello';



/* function expensiveIntialState(){
  return 10;
} */

/* const App = () => {
  
    
  const [count, setCount] = useState(10);
  const [count1, setCount1] = useState(20);

    return (

      <div>
      <button onClick={() => {
        setCount(c => c + 1);
        setCount1(c => c + 1);
      }} >
      +
      </button>
      <div>{count}</div>
      <div>{count1}</div>
      </div>

    );
    
    
  
} */

const App = () => {


  const [ values ,handleChange] = useForm({email: '', password: ''});



  const [showHello, setShowHello] = useState(true);

 /*  useEffect (() => {
    console.log("render");
    return () => {
      console.log("unmount");
    }
  }, []);
 */


  /* const [ email ,setEmail] = useState("");
  const [ password ,setPassword] = useState(""); */


  return(


          <div>


              <>
              <button onClick={() => setShowHello(!showHello)}>toggle</button>
               {showHello && <Hello/>}
                <input
              name="email"
              value={values.email}
              onChange={handleChange}
              />
              <input
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              />
              </>




          
          
          </div>



  );



};

export default App;
