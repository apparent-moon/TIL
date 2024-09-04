/*eslint-disable*/

import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {

    let post = "글 제목";
    let [title,changeTitle] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬독학']);
    let [like, likeAdd] = useState(0)

    return (
        <div className="App">
            <div className="black-nav">
                <h4 style={{color: 'purple', fontSize: '30px'}}>블로그</h4>
            </div>
            <button onClick={() => {
                let copy = [...title];
                copy[0] = '여자 코트 추천';
                changeTitle(copy)
            }}>이름변경</button>
            <button onClick={() => {
                let copy = [...title];
                copy.sort();
                changeTitle(copy);
            }}>가나다순정렬</button>
            <div className="list">
                <h4>{title[0]} <span onClick={() => {
                    likeAdd(like + 1)
                }}>❤</span> {like} </h4>
                <p> 9월 4일 발행</p>
            </div>
            <div className="list">
                <h4>{title[1]} <span>❤</span> {like} </h4>
                <p> 9월 4일 발행</p>
            </div>
            <div className="list">
                <h4>{title[2]} <span>❤</span> {like} </h4>
                <p> 9월 4일 발행</p>
            </div>
        </div>
    );
}

export default App;
