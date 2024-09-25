import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Users from './pages/Users';
import AddUser from './pages/AddUser';
import EditUser from './pages/EditUser';
import Layout from './pages/Layout';
import Companies from './pages/CompaniesList'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/users" element={<Users />} />
          <Route path="/add-user" element={<AddUser />} />
          <Route path="/edit-user/:id" element={<EditUser />} />
          <Route path="/companies" element={<Companies />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
