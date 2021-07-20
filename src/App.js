import './App.css'
import { Typography, Image, Space, Button } from 'antd'
import 'antd/dist/antd.css'
import stickHorizontal from './images/stickHorizontal.png'
import Match from './match.jsx'
import React, { useEffect, useState } from 'react'
import { fetchGames } from './functions/football'

const { Title } = Typography

const App = () => {
  const [items, setItems] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      console.log(await fetchGames())
    }
    fetchData()
  })

  return (
    <div className='App'>
      {error ? (
        <p>{error.message}</p>
      ) : items.length <= 0 ? (
        <p>Loading</p>
      ) : (
        <>
          <Typography>
            <Space direction='horizontal'>
              <Title level={1}>prono</Title>
              <Image width={150} src={stickHorizontal} preview={false} />
            </Space>
          </Typography>
          <Space value='8' direction='vertical'>
            <Button>Live</Button>
            {items.map((item) => (
              <Match item={item} />
            ))}
          </Space>
        </>
      )}
    </div>
  )
}

export default App
