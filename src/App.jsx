
import './App.css'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import AddItems from './Component/Additem';
import ViewItem from './Component/viewItem';
import Header from './Component/Header';
import Item from './Component/item';
function App() {
 

  return <>
  <Header/>
  <Router>
    <Routes>
      <Route path='/storeboard/additems' element={<AddItems/>}></Route>
      <Route path='/storeboard/viewitems' element={<ViewItem/>}></Route>
      <Route path='/storeboard/viewitem/:id' element={<Item/>}></Route>
    </Routes>
  </Router>
  </>

}

export default App;
