import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


/* Todos:
- CRUD (delete)
- time
- enter keyboard press
*/
function App() {
  // array of toDos. When new todo button is clicked, we 
  // push the text into the array and useState will automatically update the view
  const [toDos, setToDos] = useState([])
  const [isemptyText, setIsEmptyText] = useState(true)

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Todo app
        </p>

        {/* add new todos */}
        <form>
          <label htmlFor = "todoInput">Add Todo</label>
          <input type="text" id="todoInput" onChange={() => {
            document.getElementById("todoInput").value == "" ? setIsEmptyText(true): setIsEmptyText(false)}
            }/>
          <input type="button" value="Submit" disabled={isemptyText} onClick={() => setToDos(current => [...current, document.getElementById("todoInput").value])}/>
        </form>

        {/* display todos */}
        <div className="toDos" id="toDos">
          {toDos.map((todo, index) => (
            <li key={index}>
              <span>{todo}</span>
            </li>
          ))}
        </div>
      </header>
      <div>
        <a
            className="App-link"
            href="https://davidlwang.xyz"
            target="_blank"
            rel="noopener noreferrer"
          >
            My website
          </a>
      </div>
    </div>
  );
}

export default App;
