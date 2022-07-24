import { useEffect, useState } from 'react';
import './App.css';
import Header from './Header/Header';
import Search from './Search/Search'
import TextLines from './TextLines/TextLines';
import InfoBlock from './InfoBlock/InfoBlock'
import InfoCard from './InfoCard/InfoCard'

const buildDate = () => {
  let today = new Date()
  const dd = String(today.getDate()).padStart(2, '0')
  const mm = String(today.getMonth() + 1).padStart(2, '0')
  const yyyy = today.getFullYear()

  return (today = dd + '.' + mm + '.' + yyyy)
}

/*
* Главный файл
*/

function App() {
  const [date, setDate] = useState()
  const headerNews = [
    {
      icon: 'https://avatars.dzeninfra.ru/get-ynews-logo/26056/1244-1478692909956-square/logo-square',
      text: 'На фестивале цветов в Павловске представят «Царь-букет», посвящённый Петру I',
    },
    {
      icon: 'https://avatars.dzeninfra.ru/get-ynews-logo/26056/1244-1478692909956-square/logo-square',
      text: 'На фестивале цветов в Павловске представят «Царь-букет», посвящённый Петру I',
    },
    {
      icon: 'https://avatars.dzeninfra.ru/get-ynews-logo/26056/1244-1478692909956-square/logo-square',
      text: 'На фестивале цветов в Павловске представят «Царь-букет», посвящённый Петру I',
    },
    {
      icon: 'https://avatars.dzeninfra.ru/get-ynews-logo/26056/1244-1478692909956-square/logo-square',
      text: 'На фестивале цветов в Павловске представят «Царь-букет», посвящённый Петру I',
    },
    {
      icon: 'https://avatars.dzeninfra.ru/get-ynews-logo/26056/1244-1478692909956-square/logo-square',
      text: 'На фестивале цветов в Павловске представят «Царь-букет», посвящённый Петру I',
    },
  ]
  const headerBlocks =['Карта','Эфир','Посещаемое']
  const blocks = [
    [
      {
        icon: '',
        text: 'Расписания',
        grayText: null,
        boldText: null
      }
      ],
    [
      {
        icon: '',
        text: 'Управление как искусство',
        grayText: null,
        boldText: null
      }
    ],
    [
      {
        icon: 'https://avatars.dzeninfra.ru/get-ynews-logo/26056/1244-1478692909956-square/logo-square',
        text: 'На фестивале цветов в Павловске представят «Царь-букет», посвящённый Петру I',
        grayText: '«Царь-букет»',
        boldText: '«Царь-букет»'
      },
      {
        icon: 'https://avatars.dzeninfra.ru/get-ynews-logo/26056/1244-1478692909956-square/logo-square',
        text: 'На фестивале цветов в Павловске представят «Царь-букет», посвящённый Петру I',
        grayText: '«Царь-букет»',
        boldText: null
      },
      {
        icon: 'https://avatars.dzeninfra.ru/get-ynews-logo/26056/1244-1478692909956-square/logo-square',
        text: 'На фестивале цветов в Павловске представят «Царь-букет», посвящённый Петру I',
        grayText: null,
        boldText: '«Царь-букет»'
      }
    ]
  ]

  useEffect(() => {
    setDate(buildDate())
  }, [])
  

  return (
    <div className="App">
      <Header date={date} news={headerNews}> 
        {news => news.map((n, idx) => <TextLines key={idx} new={n} />)}
      </Header>
      <Search addLink='https://images4.alphacoders.com/174/174686.jpg'/>
      <InfoBlock blocks={blocks}>
        {bs => bs.map((b, idx) => <InfoCard key={idx} block={b} headerBlock={headerBlocks[idx]} />)}
      </InfoBlock>
    </div>
  );
}



export default App;
