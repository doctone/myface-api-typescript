import './App.css';
import { Link } from "react-router-dom";
import { PostList } from './components/Posts/PostList/PostList';
import { UserList } from './components/Users/UserList/UserList';
import { UserDetail } from './components/Users/UserDetail/UserDetail';

function App() {
  return (
    <div className="App">
      {/* <UserDetail userId='1' /> */}
      {/* <UserList /> */}
      <Link to='/posts'>Posts</Link> |{" "}
      <Link to='/users'>Users</Link>
      <PostList />
    </div>
  );
}

export default App;
