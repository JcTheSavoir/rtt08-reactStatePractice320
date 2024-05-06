import './App.css';
import Learner from './components/Learner';
import learners  from "./models/learners";

function App() {

  return (
    <div className="App">
      {learners.map((learner) =>
        <Learner student={learner} />
      )}

    </div>
  );
}

export default App;
