import { useEffect } from 'react';
import { useState } from 'react'

function App() {
  const [title,setTitle] = useState("");
  const [story,setStory] = useState("");

  const [num1,setNum1] = useState(0);
  const [num2,setNum2] = useState(0);
  const [sum,setSum] = useState(0);
  const [mul,setMul] = useState(0);

  useEffect(()=>{
    fetch("/api/message")
    .then((res)=>res.json())
    .then((data)=>{
      setTitle(data.title);
      setStory(data.story);
    })

    // fetch("/api/sm",{
    //   method: "POST",
    //   headers: {
    //     "content-Type": "application/json"
    //   },
    //   body: JSON.stringify({
    //     a: num1,
    //     b: num2
    //   })
    // })
    // .then((res)=>res.json())
    // .then((data)=>{
    //   setSum(data.sum);
    //   setMul(data.mul);
    // })
  },[]);

  const calculate = async ()=>{
    const res = await fetch("/api/sm",{
      method: "POST",
      headers: {
        "content-Type": "application/json"
      },
      body: JSON.stringify({
        a: num1,
        b: num2
      })
    });

    return await res.json();
  }

  
  const handelsum = async (e)=>{
    e.preventDefault();
    const data = await calculate();   
    setSum(data.sum);
    setNum1(0);
    setNum2(0);
  }

  const handelmul = async (e)=>{
    e.preventDefault();
    setSum(0);
    const data = await calculate();   
    setMul(data.mul);
    setNum1(0);
    setNum2(0);
  }
   
  return (
    <div>
      <h1>{title}</h1>
      <p>{story}</p>

      <form>
        <input type="Number" onChange={(e)=>setNum1(e.target.value)} value={num1} placeholder='Inter number 1'/>
        <input type="Number" onChange={(e)=>setNum2(e.target.value)} value={num2} placeholder='Inter number 2'/>
        <button onClick={handelsum}>Sum</button>
        <button onClick={handelmul}>Mul</button>
      </form>
      <br />
      <br />

      {(sum == 0 && mul == 0)?"":((sum)? <h2>sum of two number {sum}</h2>:<h2>mul of two number {mul}</h2>)}

    </div>
  )
}

export default App
