import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddUser() {
  const [user, setUser] = useState({ name: '', surname: '', age: '', address: '' });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    user.id = users.length ? users[users.length - 1].id + 1 : 1;
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
    navigate('/users');
  };

  return (
    <div className="bg-white shadow-md p-6 rounded">
      <h1 className="text-2xl font-bold mb-4">Add User</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
          className="w-full p-2 mb-4 border rounded"
        />
        <input
          type="text"
          placeholder="Surname"
          value={user.surname}
          onChange={(e) => setUser({ ...user, surname: e.target.value })}
          className="w-full p-2 mb-4 border rounded"
        />
        <input
          type="text"
          placeholder="Age"
          value={user.age}
          onChange={(e) => setUser({ ...user, age: e.target.value })}
          className="w-full p-2 mb-4 border rounded"
        />
        <input
          type="text"
          placeholder="Address"
          value={user.address}
          onChange={(e) => setUser({ ...user, address: e.target.value })}
          className="w-full p-2 mb-4 border rounded"
        />
        <button type="submit" className="bg-green-500 text-white p-2 rounded">
          Add User
        </button>
      </form>
    </div>
  );
}

export default AddUser;
