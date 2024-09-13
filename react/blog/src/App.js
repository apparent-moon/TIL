/*eslint-disable*/

import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {

    let post = "글 제목";
    let [title,changeTitle] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬독학']);
    let [modalTitle,setTitle] = useState(0);
    let [like, setLike] = useState([0,0,0]);
    let [modal, setModal] = useState(false);
    let [input, setInput] = useState('');

    return (
        <div className="App">
            <div className="black-nav">
                <h4 style={{color: 'purple', fontSize: '30px'}}>블로그</h4>
            </div>
            <button onClick={() => {
                let copy = [...title];
                copy[0] = '여자 코트 추천';
                changeTitle(copy)
            }}>이름변경
            </button>
            <button onClick={() => {
                let copy = [...title];
                copy.sort();
                changeTitle(copy);
            }}>가나다순정렬
            </button>
            {
                title.map(function(a, i){
                    return (
                        <div className="list" key={i}>
                            <h4 onClick={() => {setModal(true); setTitle(i)}}>
                                {title[i]}
                                <span onClick={(e) => {
                                e.stopPropagation();
                                let copy = [...like];
                                copy[i] = copy[i] + 1;
                                setLike(copy);
                                }}>❤</span> {like[i]}
                            </h4>
                            <p> 9월 4일 발행</p>
                            <button onClick={() => {
                                let copy = [...title];
                                copy.splice(i , 1);
                                changeTitle(copy);
                            }}>삭제</button>
                        </div>
                    )
                })
            }

            <input type="text" onChange={(e)=> {
                setInput(e.target.value);
            }}></input>
            <button onClick = {() => {
                let copy = [...title];
                console.log(input);
                if(input != '') {
                    copy.unshift(input);
                    changeTitle(copy);
                }
            }}>글발행</button>

            {
                modal == true ? <Modal color = {'pink'} setTitle = {setTitle} modalTitle = {modalTitle} title = {title} changeTitle ={changeTitle}/> : null
            }

            <Component/>
        </div>
    );
}

function Modal(props) {
    return (
        <>
            <div className="modal" style={{background : props.color}}>
                <h4>{props.title[props.modalTitle]}</h4>
                <p>날짜</p>
                <p>상세내용</p>
                <button onClick={() => {
                    let copy = [...props.title];
                    copy[0] = '여자 코트 추천';
                    props.changeTitle(copy)
                }}>글수정</button>
            </div>
        </>
    );
}

class Modal2 extends React.Component{
    constructor() {
        super();
        this.state = {
            name : 'kim',
            age : '20'
        }
    }
    render() {
        return(
            <div>Hi</div>
        )
    }
}

const Component = () => {
    return(
        <>
            <div className="test">
                <p>test</p>
            </div>
        </>
    );
}

export default App;
