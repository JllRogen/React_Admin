import React, { useRef, useEffect } from 'react';


function App() {
  const ref = useRef()


  // useEffect(() => {
  //   debugger

  //   console.log(ref)

  //   // return () => {
  //   //   cleanup
  //   // };
  // }, []);
  return (
    <div className="App" ref={ref} >
    </div>
  );
}

export default App;