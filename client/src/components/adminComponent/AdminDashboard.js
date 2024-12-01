import React from 'react'
import AdminHeader from './adminDahboardComponent/AdminHeader'
import AdminBody from './adminDahboardComponent/AdminBody'
import AdminFooter from './adminDahboardComponent/AdminFooter'
import FindMember from './addminOperations/FindMember'
import PaymentForm from './addminOperations/Payment'

const AdminDashboard = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">

      <header className="shadow-lg font-mono mb-20">
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
