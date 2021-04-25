import React, {useState} from 'react';
import './App.css';
import { Spin, Space } from 'antd';
import 'antd/dist/antd.css';
import { useForm } from './useForm';
import { Formik } from 'formik';



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

  /* const [ email ,setEmail] = useState("");
  const [ password ,setPassword] = useState(""); */


  return(


  <div>

  <Formik>
  {() => (

  <>
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


  )}
  </Formik>

  
  
  </div>



  );



};

export default App;
