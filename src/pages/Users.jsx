import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    setUsers(storedUsers);
  }, []);

  const deleteUser = (id) => {
    const updatedUsers = users.filter(user => user.id !== id);
    setUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Users</h1>
        <Link to="/add-user">
          <button className="bg-green-500 text-white p-2 rounded">Add user</button>
        </Link>
      </div>
      <table className="w-full text-left bg-white shadow-md rounded">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-4">ID</th>
            <th className="p-4">Name</th>
            <th className="p-4">Surname</th>
            <th className="p-4">Age</th>
            <th className="p-4">Address</th>
            <th className="p-4">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="border-b">
              <td className="p-4">{user.id}</td>
              <td className="p-4">{user.name}</td>
              <td className="p-4">{user.surname}</td>
              <td className="p-4">{user.age}</td>
              <td className="p-4">{user.address}</td>
              <td className="p-4">
                <button
                  onClick={() => deleteUser(user.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded mr-2"
                >
                  Delete
                </button>
                <Link to={`/edit-user/${user.id}`}>
                  <button className="bg-blue-500 text-white px-2 py-1 rounded">Update</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Users;
