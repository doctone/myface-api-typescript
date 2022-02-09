import './App.scss';
import { PostList } from './components/Posts/PostList/PostList';
import { UserList } from './components/Users/UserList/UserList';
import { UserDetail } from './components/Users/UserDetail/UserDetail';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from './components/Header/NavBar'
import { HomePage } from './components/HomePage/HomePage';

function App() {
  return (
      <BrowserRouter>
    <div className="App">
      <header><NavBar /></header>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/posts" element={<PostList />} />
      <Route path="/posts/?page=:pageNumber" element={<PostList />} />
      <Route path="/users" element={<UserList />} />
      <Route path='/users/:userId' element={<UserDetail />}/>
    </Routes>
    </div>
    </BrowserRouter>
  );
}
export default App;
