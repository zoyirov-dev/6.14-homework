import { useRef } from 'react';

function UserTable({ users, onEdit, onDelete }) {
  const tableRef = useRef(null);

  return (
    <div ref={tableRef} className="w-full">
      <table className="w-full bg-white rounded-lg shadow-md">
        <thead>
          <tr className="bg-green-700 text-white">
            <th className="p-2">Rank</th>
            <th className="p-2">Name</th>
            <th className="p-2">Email</th>
            <th className="p-2">Birth Date</th>
            <th className="p-2">Gender</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
              <td className="p-2 text-center">{index + 1}</td>
              <td className="p-2">{user.name}</td>
              <td className="p-2">{user.email}</td>
              <td className="p-2">{user.birthDate}</td>
              <td className="p-2">{user.gender}</td>
              <td className="p-2 flex justify-center space-x-2">
                <button 
                  onClick={() => onEdit(user)} 
                  className="bg-blue-600 text-white px-2 py-1 rounded-lg"
                >
                  Edit
                </button>
                <button 
                  onClick={() => onDelete(user.id)} 
                  className="bg-red-600 text-white px-2 py-1 rounded-lg"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserTable; 