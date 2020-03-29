import React from 'react';
import {Provider} from 'react-redux'
import './App.css';
import CakeContainer from './components/CakeContainer';
import store from './redux/store'
import IceCreamContainer from './components/IceCreamContainer';
import NewCakeContainer from './components/NewCakeContainer';
import ItemContainer from './components/ItemContainer';
import UserContainer from './components/UserContainer';
import PasteryContainer from './components/PasteryContainer';
import ParentContainer from './components/ParentContainer';
import CandiesContainer from './components/CandiesContainer';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      {/* <CakeContainer/>
      <IceCreamContainer/>
      <NewCakeContainer/>
      <ItemContainer cake/>
      <ItemContainer/> */}
      {/* <UserContainer/> */}
      {/* <PasteryContainer/> */}
      {/* <ParentContainer/> */}
      <CandiesContainer/>
    </div>
    </Provider>
  );
}

export default App;
