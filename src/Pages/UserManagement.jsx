import React, { useState } from 'react'
import SearchField from '../components/SearchField'

function UserManagement() {
    const [users, setUsers] = useState([
        { id: 1, name: 'John Doe', email: 'johndoe@example.com', role: 'Admin' },
        { id: 2, name: 'Jane Smith', email: 'janesmith@example.com', role: 'User' },
        { id: 3, name: 'Bob Johnson', email: 'bobjohnson@example.com', role: 'Editor' },
    ]);

    return (
        <div>
            <SearchField />
            <h1 className='text-4xl text-white text-center mt-2'>User Management</h1>
            <div className="container mx-auto p-4">
                <h1 className="text-2xl font-bold mb-4">User Management</h1>

                <table className="table-auto w-full">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="px-4 py-2">Name</th>
                            <th className="px-4 py-2">Email</th>
                            <th className="px-4 py-2">Role</th>
                            <th className="px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id} className="border-b border-gray-200 hover:bg-gray-100">
                                <td className="px-4 py-2">{user.name}</td>
                                <td className="px-4 py-2">{user.email}</td>
                                <td className="px-4 py-2">{user.role}</td>
                                <td className="px-4 py-2">
                                    <button className="bg-blue-500 text-white px-4 py-2 rounded">Edit</button>
                                    <button className="bg-red-500 text-white px-4 py-2 rounded">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default UserManagement
