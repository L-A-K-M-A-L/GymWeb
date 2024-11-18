import React from 'react'
import AdminHeader from './adminDahboardComponent/AdminHeader'
import AdminBody from './adminDahboardComponent/AdminBody'
import AdminFooter from './adminDahboardComponent/AdminFooter'

const AdminDashboard = () => {
  return (
    <div className="flex flex-col min-h-screen">

      <header className="shadow-lg font-mono">
        <AdminHeader />
      </header>


      <main className="flex-grow py-6 px-4 sm:px-6 lg:px-8">
        <AdminBody />
      </main>

      <footer>
        <AdminFooter />
      </footer>
    </div>
  );
}

export default AdminDashboard;
