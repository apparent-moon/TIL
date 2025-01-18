import './App.css'
import {useState} from "react";

function App() {

    let post = '강남 우동 맛집';
    let [title, d] = useState(['여자코트추천', '맛집추천', '우동맛집추천']);

  return (
      <div className="App">
          <div className="black-nav">
              <h4 style={{color: 'blueviolet', fontSize: '20px'}}>Blog</h4>
          </div>
          <div className="list">
              <h4>{title[0]}</h4>
              <p>1월 17일 발행</p>
          </div>
          <div className="list">
              <h4>{title[1]}</h4>
              <p>1월 17일 발행</p>
          </div>
          <div className="list">
              <h4>{title[2]}</h4>
              <p>1월 17일 발행</p>
          </div>
      </div>
  )
}

export default App
