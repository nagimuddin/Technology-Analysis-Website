import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './Components/Blogs/Blog';
import Dashboard from './Components/Dashboard/Dashboard';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import Review from './Components/Review/Review';
import ReviewTwo from './Components/ReviewTow/ReviewTwo';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/reviewtwo" element={<ReviewTwo></ReviewTwo>}></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
