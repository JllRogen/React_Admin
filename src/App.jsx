import React, { useRef, useEffect } from 'react';

import { getRootRouter } from '@/router'


let router = null

function App() {
  const ref = useRef()
  useEffect(() => {
    router = getRootRouter()
    return router.mount(ref.current)
  }, []);
  return (
    <div className="App" ref={ref}></div>
  );
}

export default App;