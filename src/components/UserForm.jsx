import { useState, useRef, useEffect } from 'react';

function UserForm({ onSubmit, editData, isEditing }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    birthDate: '',
    gender: ''
  });
  
  const nameRef = useRef(null);

  useEffect(() => {
    if (editData && isEditing) {
      setFormData({
        name: editData.name || '',
        email: editData.email || '',
        password: editData.password || '',
        birthDate: editData.birthDate || '',
        gender: editData.gender || ''
      });
    } else {
      setFormData({
        name: '',
        email: '',
        password: '',
        birthDate: '',
        gender: ''
      });
    }
  }, [editData, isEditing]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ name: '', email: '', password: '', birthDate: '', gender: '' });
    nameRef.current.focus();
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Signup Form</h2>
      <div className="mb-4">
        <label className="block text-gray-700">Full Name</label>
        <input
          ref={nameRef}
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
        {isEditing ? 'Update' : 'Submit'}
      </button>
    </form>
  );
}

export default UserForm; 