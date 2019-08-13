import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import SelectTopicLayout from "./routes/topics/SelectTopicLayout";
import QuizLayout from "./routes/quiz/QuizLayout";
import ResultLayout from "./routes/result/ResultLayout";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={SelectTopicLayout} />
        <Route path="/quiz/:quiz_id" component={QuizLayout} />
        <Route path="/result/:quiz_id" component={ResultLayout} />
      </Router>
    </div>
  );
}

export default App;
