import React from 'react'

const AdminBody = () => {
  return (
    <>
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-semibold text-gray-900">Admin Dashboard</h1>

          {/* Dashboard Cards or Widgets */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Add more card components as needed */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-gray-700">Add Admin</h3>
              <p className="mt-2 text-gray-500">Manage admin users here.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-gray-700">Add User</h3>
              <p className="mt-2 text-gray-500">Add new users to the system.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-gray-700">Payments</h3>
              <p className="mt-2 text-gray-500">View and manage payments.</p>
            </div>
          </div>
        </div>
    </>
  )
}

export default AdminBody