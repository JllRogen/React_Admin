import React, { useRef, useEffect } from 'react';

import router from '@/router'

function App() {
  const ref = useRef()
  useEffect(() => {
    return router.bind(ref.current)
  }, []);
  return (
    <div className="App" ref={ref}></div>
  );
}

export default App;