import { useState } from 'react';

function App() {
  const [users, setUsers] = useState([
    { id: 1, name: 'Dominic', points: 88110, team: 'dcode' },
    { id: 2, name: 'Sally', points: 72400, team: 'Students' },
    { id: 3, name: 'Nick', points: 52300, team: 'dcode' },
  ]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    birthDate: '',
    gender: '',
  });
  const [editId, setEditId] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editId) {
      setUsers(users.map(user =>
        user.id === editId ? { ...user, ...formData, id: editId } : user
      ));
      setEditId(null);
    } else {
      setUsers([...users, { ...formData, id: Date.now(), points: 0, team: 'dcode' }]);
    }
    setFormData({ name: '', email: '', password: '', birthDate: '', gender: '' });
  };

  const handleEdit = (id) => {
    const user = users.find(user => user.id === id);
    setFormData({ name: user.name, email: user.email, password: user.password, birthDate: user.birthDate, gender: user.gender });
    setEditId(id);
  };

  const handleDelete = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <div className="flex h-screen bg-gray-100 p-4">
      <div className="w-1/2 p-4">
        <table className="w-full bg-white rounded-lg shadow-md">
          <thead>
            <tr className="bg-green-700 text-white">
              <th className="p-2">Rank</th>
              <th className="p-2">Name</th>
              <th className="p-2">Points</th>
              <th className="p-2">Team</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
                <td className="p-2 text-center">{index + 1}</td>
                <td className="p-2">{user.name}</td>
                <td className="p-2">{user.points}</td>
                <td className="p-2">{user.team}</td>
                <td className="p-2 flex justify-center space-x-2">
                  <button onClick={() => handleEdit(user.id)} className="bg-blue-600 text-white px-2 py-1 rounded-lg">Edit</button>
                  <button onClick={() => handleDelete(user.id)} className="bg-red-600 text-white px-2 py-1 rounded-lg">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="w-1/2 p-4">
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-center">Signup Form</h2>
          <div className="mb-4">
            <label className="block text-gray-700">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
              placeholder="Enter your full name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
              placeholder="Enter your email address"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Birth Date</label>
            <input
              type="date"
              name="birthDate"
              value={formData.birthDate}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Gender</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
              required
            >
              <option value="">Select your gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <button type="submit" className="w-full bg-green-600 text-white p-2 rounded-lg">
            {editId ? 'Update' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;