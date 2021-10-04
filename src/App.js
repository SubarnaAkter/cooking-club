
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import CookingClasses from './Components/CookingClass/CookingClasses';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
     <Router>
       <Header></Header>
       <Switch>
         <Route exact path="/">
            <Home></Home>
         </Route>
         <Route exact path="/Home">
            <Home></Home>
         </Route>
         <Route exact path="/CookingClasses">
            <CookingClasses></CookingClasses>
         </Route>
         <Route exact path="/About">
            <About></About>
         </Route>
         <Route exact path="/Contact">
            <Contact></Contact>
         </Route>
         <Route path="*">
           <NotFound></NotFound>
         </Route>
       </Switch>
       <Footer></Footer>
     </Router>
    </div>
  );
}

export default App;
