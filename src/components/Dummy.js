import React, { useEffect, useState } from 'react'

export function Dummy() {

   const [cnt, setCnt] = useState(0)
  useEffect(() => {
    console.log("mounting...")
    return () =>{
        console.log("unmounting...")
    }
  },[])

  useEffect(() =>{
    console.log("cnt", cnt, "updating phase")
  },[cnt])

  const handleClick = () => {
    setCnt(cnt + 1)
  }
  
  return (
    <>
    {cnt} 
    <div onClick={handleClick}>click me to increment</div>
    </>
  )
}
