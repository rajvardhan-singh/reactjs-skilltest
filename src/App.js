import { useEffect, useRef, useState } from 'react';
import { apiCall } from './api/api';
// import { Card } from '@mui/material';
import Card from './component/Card'
import './App.css'


function App() {
  const [data, setData] = useState()
  const render = useRef(true)

  useEffect(() => {
    const getCardData = async () => {
      render.current = false;
      const apiData = await apiCall();

      console.log(apiData);
      setData(apiData)
    }

    if (render.current) getCardData()
  }, [data, setData])

  return (
    <div className='outerDiv'>
      {
        data && data.firstData.map((user) => (
          <>
            <Card user={user} key={user.id} />
          </>
        ))
      }

      {
        data && data.nextData.map((user) => (
          <>
            <Card user={user} key={user.id} />
          </>
        ))
      }

    </div>

  );
}

export default App;
