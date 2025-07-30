import { useState, useRef } from 'react';
import UserForm from './components/UserForm';
import UserTable from './components/UserTable';

function App() {
  const [users, setUsers] = useState([
    { id: 1, name: 'Dominic', email: 'dominic@example.com', password: '123456', birthDate: '1990-01-01', gender: 'Male' },
    { id: 2, name: 'Diyorbek', email: 'diyorbek@example.com', password: '123456', birthDate: '1995-05-15', gender: 'Male' },
    { id: 3, name: 'Muhiddin', email: 'muhiddin@example.com', password: '123456', birthDate: '1988-12-20', gender: 'Male' },
  ]);
  
  const [editUser, setEditUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const containerRef = useRef(null);

  const handleSubmit = (formData) => {
    if (isEditing && editUser) {
      setUsers(users.map(user =>
        user.id === editUser.id ? { ...user, ...formData } : user
      ));
      setIsEditing(false);
      setEditUser(null);
    } else {
      setUsers([...users, { ...formData, id: Date.now() }]);
    }
  };

  const handleEdit = (user) => {
    setEditUser(user);
    setIsEditing(true);
  };

  const handleDelete = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <div ref={containerRef} className="flex h-screen bg-gray-100 p-4">
      <div className="w-1/2 p-4">
        <UserTable 
          users={users} 
          onEdit={handleEdit} 
          onDelete={handleDelete} 
        />
      </div>
      <div className="w-1/2 p-4">
        <UserForm 
          onSubmit={handleSubmit}
          editData={editUser}
          isEditing={isEditing}
        />
      </div>
    </div>
  );
}

export default App;