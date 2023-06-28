import './App.css';
import { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [id, setId] = useState('')
  const [score, setScore] = useState()
  const [content, setContent] = useState([])

  const submitForm =() => {
    setContent(current => [...current, {
      key: content.length,
      name: name,
      id: id,
      score: score
    } ])
    console.log(content)
  }

  const deleteContent = (key) =>{
    const delContent = content
    delContent.splice(key, 1);
    setContent(() => ([...delContent]));
  }
  return (
    <div className="App">
      <p>Hello world! Please enter the required information to creat content.</p>
      <div>
        <form>
          <input type='text' name='name' placeholder='Name: ' onChange={(e) => setName(e.target.value)}/>
          <input type='text' name='id' placeholder='Id: ' onChange={(e) => setId(e.target.value)}/>
          <input type='number' name='score' placeholder='Score: ' onChange={(e) => setScore(e.target.value)}/>
        </form>
        <button onClick={submitForm}>Submit</button>
      </div>
      <div className='cardContainer'>
        {content?.map((c) => {
          return(
            <div key={c.key}>
              <p>{c.name}</p>
              <p>{c.id}</p>
              <p>{c.score}</p>
              <button>Edit</button>
              <button onClick={() => deleteContent(c.key)}>Delete</button>
            </div>          
          )
        })}
      </div>
    </div> 
  );
}

export default App;
