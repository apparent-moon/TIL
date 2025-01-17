import './App.css'

function App() {

    let post = '변수';

  return (
      <div className="App">
          <div className="black-nav">
              <h4 style={ {color:'red', fontSize : '20px'} }>Blog</h4>
          </div>
          <h4>{post}</h4>
      </div>
  )
}

export default App
