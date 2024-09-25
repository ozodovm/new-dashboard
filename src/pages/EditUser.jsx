import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function EditUser() {
  const { id } = useParams(); // URL orqali kelgan foydalanuvchi ID sini olish
  const navigate = useNavigate();
  const [user, setUser] = useState({ name: '', surname: '', age: '', address: '' });

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userToEdit = users.find(u => u.id === parseInt(id));
    if (userToEdit) {
      setUser(userToEdit);
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const updatedUsers = users.map(u => (u.id === parseInt(id) ? user : u));
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    navigate('/users');
  };

  return (
    <div className="bg-white shadow-md p-6 rounded">
      <h1 className="text-2xl font-bold mb-4">Edit User</h1>
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
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Save Changes
        </button>
      </form>
    </div>
  );
}

export default EditUser;
