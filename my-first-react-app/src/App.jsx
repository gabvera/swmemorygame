import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [score, setScore] = useState(0)
  let [bestScore, setBestScore] = useState(0)

  function changePosition(e, target){
    console.log(e)
    console.log(target)
    console.log(e.children)

    if(target.classList.contains('selected')){
      if(score>bestScore){
        setBestScore(score)
      }
      setScore(score = 0)
      for(let i=0;i<11;i++){
        e.children[i].classList.remove('selected')
      }
    }else{
      target.classList.add('selected')
      setScore(score + 1)
    }
    

    let array = ['0','1','2','3','4','5','6','7','8','9','10','11']

    console.log('array', array)
    let shuffle = array.sort(() => Math. random() - 0.5);

    let i = 0
    for(let c = 1; c < 4; c++){
      for(let r = 1; r < 5; r++){
        
        // console.log(e.children[i])
        // console.log(shuffle)
        console.log(c, r)
        console.log('random child', e.children[shuffle[i]])
        e.children[shuffle[i]].style.gridColumn = r
        e.children[shuffle[i]].style.gridRow = c
        
        
        i++
      }
    }



    // for(let i = 0; i < e.children.length; i++){
    //   function generateRandom(min, max, actualNumber) {
    //     var num = Math.floor(Math.random() * (max - min + 1)) + min;
    //     return (num === actualNumber) ? generateRandom(min, max) : num;
    //   }

    //   e.children[i].style.gridRow = generateRandom(1,3,e.style.gridRow )
    //   e.children[i].style.gridColumn = generateRandom(1,4,e.style.gridColumn)

    //   for(let x = 0; x < changed.length; x++){
    //     if(((e.children[i].style.gridRow === e.children[x].style.gridRow) && (e.children[i].style.gridColumn === e.children[x].style.gridColumn) && (e.children[i].id != e.children[x].id))){
    //       console.log('hello', e.children[i], e.children[x])
    //     }
    //   }
      
    //   e.children[i].classList.add('changed')
    //   changed.push(changed.length + 1)
    //   console.log("changed number", changed)
    // }
  }
  
  function fetchTest(number){
    const [api, setApi] = useState('loading')
    useEffect(() => {
        const url = `https://akabab.github.io/starwars-api/api/id/${number}.json`
        fetch(url)
        .then(res => res.json())
        .then(data => { setApi(data) })
    }, [])
    return(
      <>
      <>
        <h2>{api.name}</h2>
        <img src={api.image} />
      </>
      </>
    )
  }
    
  return (
    <>
      <h1>Star Wars Memory Game</h1>
      <div>Score: {score}</div>
      <div>Best score:  {bestScore}</div>
      <div className='cards'>
        <div onClick={event => changePosition(event.target.parentElement, event.target)} className='card' id='1'>
         {fetchTest(1) }
        </div>
        <div onClick={event => changePosition(event.target.parentElement, event.target)} className='card' id='2'>
          {fetchTest(2) }
        </div>
        <div onClick={event => changePosition(event.target.parentElement, event.target)} className='card' id='3'>
          {fetchTest(3) }
        </div>
        <div onClick={event => changePosition(event.target.parentElement, event.target)} className='card' id='4'>
          {fetchTest(4) }
        </div>
        <div onClick={event => changePosition(event.target.parentElement, event.target)} className='card' id='5'>
          {fetchTest(5) }
        </div>
        <div onClick={event => changePosition(event.target.parentElement, event.target)} className='card' id='6'>
          {fetchTest(6) }
        </div>
        <div onClick={event => changePosition(event.target.parentElement, event.target)} className='card' id='7'>
          {fetchTest(13) }
        </div>
        <div onClick={event => changePosition(event.target.parentElement, event.target)} className='card' id='8'>
          {fetchTest(7) }
        </div>
        <div onClick={event => changePosition(event.target.parentElement, event.target)} className='card' id='9'>
          {fetchTest(8) }
        </div>
        <div onClick={event => changePosition(event.target.parentElement, event.target)} className='card' id='10'>
          {fetchTest(9) }
        </div>
        <div onClick={event => changePosition(event.target.parentElement, event.target)} className='card' id='11'>
          {fetchTest(10) }
        </div>
        <div onClick={event => changePosition(event.target.parentElement, event.target)} className='card' id='12'>
          {fetchTest(11) }
        </div>
      </div>
    </>
  )
}

export default App
