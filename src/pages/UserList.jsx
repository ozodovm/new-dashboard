import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function UserList() {
  const [users, setUsers] = useState(JSON.parse(localStorage.getItem('users')) || []);
  const [isModalOpen, setIsModalOpen] = useState(false); // Modalni ko'rsatish holati
  const [userToDelete, setUserToDelete] = useState(null); // O'chiriladigan foydalanuvchi

  const openModal = (user) => {
    setUserToDelete(user);
    setIsModalOpen(true); // Modalni ochish
  };

  const closeModal = () => {
    setIsModalOpen(false); // Modalni yopish
    setUserToDelete(null); // Tanlangan foydalanuvchini tozalash
  };

  const deleteUser = () => {
    const updatedUsers = users.filter(user => user.id !== userToDelete.id);
    setUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    closeModal(); // Modalni yopamiz
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Users</h1>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="py-2">ID</th>
            <th className="py-2">Name</th>
            <th className="py-2">Surname</th>
            <th className="py-2">Age</th>
            <th className="py-2">Address</th>
            <th className="py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td className="border px-4 py-2">{user.id}</td>
              <td className="border px-4 py-2">{user.name}</td>
              <td className="border px-4 py-2">{user.surname}</td>
              <td className="border px-4 py-2">{user.age}</td>
              <td className="border px-4 py-2">{user.address}</td>
              <td className="border px-4 py-2">
                <Link to={`/edit/${user.id}`} className="bg-green-500 text-white px-3 py-1 rounded mr-2">
                  More
                </Link>
                <button
                  onClick={() => openModal(user)}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal oynasi */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg w-1/3">
            <h2 className="text-lg font-semibold mb-4">Are you sure you want to delete this user?</h2>
            <div className="flex justify-end space-x-4">
              <button
                onClick={closeModal}
                className="bg-gray-500 text-white px-4 py-2 rounded"
              >
                Cancel
              </button>
              <button
                onClick={deleteUser}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserList;
