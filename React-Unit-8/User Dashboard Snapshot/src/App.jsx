
import UserList from './components/userList';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>User Dashboard</h1>
        <p className="subtitle">Real-time team directory metrics</p>
      </header>
      <main>
        <UserList />
      </main>
    </div>
  );
}

export default App;
