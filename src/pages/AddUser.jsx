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
    <div className="flex items-center justify-center w-full h-[85vh] bg-[#014E56]">
      <div className="bg-white shadow-lg p-6 rounded-lg w-full max-w-xs">
        <h1 className="text-xl font-bold mb-4 text-center text-gray-800">Add New User</h1>
        <form onSubmit={handleSubmit}>
          <input 
            required
            type="text"
            placeholder="Name"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
            className="w-full p-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input 
            required
            type="text"
            placeholder="Surname"
            value={user.surname}
            onChange={(e) => setUser({ ...user, surname: e.target.value })}
            className="w-full p-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input 
            required
            type="text"
            placeholder="Age"
            value={user.age}
            onChange={(e) => setUser({ ...user, age: e.target.value })}
            className="w-full p-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input 
            required
            type="text"
            placeholder="Address"
            value={user.address}
            onChange={(e) => setUser({ ...user, address: e.target.value })}
            className="w-full p-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white p-2 rounded-lg transition-all duration-300"
          >
            + Add User
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddUser;
