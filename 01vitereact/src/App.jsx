import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Item from './components/Item'
import ItemDate from './components/ItemDate'
import Card from './components/Card'

function App() {
  const response = [
    {
      itemName: "nirma",
      date: "20",
      month: "june",
      year: "1992"
    },
    {
      itemName: "surfxl",
      date: "21",
      month: "july",
      year: "1989"
    },
    {
      itemName: "ghadi",
      date: "23",
      month: "january",
      year: "1982"
    }
  ];

  return (
    <>
      <Card>
        <div className='components' >
          <Item itemName={response[0].itemName} ></Item>
          <ItemDate date={response[0].date} montth={response[0].month} year={response[0].year}  >Mai hu jian </ItemDate>

          <Item itemName={response[1].itemName} ></Item>
          <ItemDate date={response[1].date} montth={response[1].month} year={response[1].year} >adjflkasd</ItemDate>

          <Item itemName={response[2].itemName} ></Item>
          <ItemDate date={response[2].date} montth={response[2].month} year={response[2].year} >asddfkajsd;lf</ItemDate>
        </div>
        <div className='container'>
          <br />
          hello namaskar
        </div>
      </Card>
    </>
  )
}

export default App
