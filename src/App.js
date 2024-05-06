import { useState } from 'react';
import './App.css';
import Learner from './components/Learner';
import learners  from "./models/learners";

function App() {

  const [learnersData, setLearnersData] = useState(learners)
  //----------------- learners: [{}, {}, {} ....]
  
  const [user, setUser] = useState({
    isLoggedIn: true,
    status: "hidden",
    content: null,
    active: true,
  });

  let studentJack = {}

  // ? What if we wanted to update/change the {state}
  const updateState = () => {
    //1. Suplicate using [...user] spread
    console.log('Currently Updating State')
    setUser((user) => ({
      ...user,
    //2. update changes
      status: "visible",
    }));
  };

  const updateMultiple = () => {
    //1. Suplicate using [...user] spread
    console.log('Currently Updating State')
    setUser((user) => ({
      ...user,
    //2. update {Multiple }changes
      status: "visible",
      content: "new Updated Content"
    }));
  };

  const addLearner = () => {
    let studentJack = {
      name: "Jack Black",
      bio: "Ipsum cupidatat commodo id aliquip nulla incididunt. Est ex voluptate veniam aute ipsum elit eiusmod. Id id reprehenderit do nisi eiusmod aliqua elit ut. Et consequat eu consectetur commodo magna amet eu aute eu esse.",
      scores: [
        {
          date: "2024-05-06",
          score: 68
        }
      ]
    }
    setLearnersData([
      studentJack,
      ...learnersData
    ])
  }

  const swapObj = () => {
    //1. Create Desired Obj
    const newObject = {
      isLoggedIn: "swap",
      status: "swapping",
      content: "swapping",
      active: "should be swapped",
    }
    setUser(newObject)
    console.log(`Updated User: ${user}`)
  }


  return (
    <div className="App">
      {learnersData.map((learner) =>
      <>
        <Learner student={learner} />
        <div className='btnContainer'>
          <button onClick={updateState}>Update State</button>
          <button onClick={updateMultiple}>Multiple</button>
          <button onClick={addLearner}>Add Learner</button>
          <button onClick={swapObj}>Replace Obj</button>
        </div>
      </>
      )}

    </div>
  );
}

export default App;
