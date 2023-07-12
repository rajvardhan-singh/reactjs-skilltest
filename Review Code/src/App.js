import { useContext, useEffect, useId, useRef, useState } from 'react';
import { apiCall } from './api/api';
import Card from './component/Card'
import './App.scss'
import { UserContext } from './context/Context';
import NextPage from './component/NextPage';


function App() {
  const { users, setUsers } = useContext(UserContext)
  const [page, setPage] = useState(1)
  const value = useRef(1);
  const uniqueId = useId()


  useEffect(() => {
    const getCardData = async () => {
      try {
        // const randomPageNumber = Math.floor(Math.random() * (2 - 1 + 1)) + 1;
        const apiData = await apiCall(page);
        setUsers(apiData)
      } catch (error) {
        console.log("Erro while calling api function: ", error);
      }

    }

    getCardData()

  }, [page])

  return (
    <>
      <NextPage setPage={setPage} />

      <div className='outerDiv'>
        {users && users.data.map((user) => (
          <Card user={user} key={`${uniqueId}--${value.current++}`} />
        ))
        }
      </div>
    </>
  );
}

export default App;
