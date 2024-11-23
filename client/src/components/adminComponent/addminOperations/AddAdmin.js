import React from 'react'
import AdminHeader from '../adminDahboardComponent/AdminHeader'
import AdminFooter from '../adminDahboardComponent/AdminFooter'

const AddAdmin = () => {
    return (
        <>
            <div className="flex flex-col min-h-screen">

                <header className="shadow-lg font-mono">
                    <AdminHeader />
                </header>


                <main className="flex-grow py-6 px-4 sm:px-6 lg:px-8">
                    <div>Add admin</div>
                </main>

                <footer>
                    <AdminFooter />
                </footer>
            </div>
        </>
    )
}

export default AddAdmin