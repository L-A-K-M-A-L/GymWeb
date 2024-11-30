import React from 'react'
import UserHeader from '../UserHeader'
import UserName from '../UserName'

import Footer from '../../Footer'

const InstructorStat = () => {
    return (
        <>
            <div className="flex flex-col min-h-screen font-mono mt-8">
                <UserHeader />
                <main className="flex-grow md:py-10 px-4 m-4 md:px-24 shadow-lg rounded md:mt-24">
                    <UserName />
                    <div>Instrucotr</div>
                </main>
                <footer>
                    <Footer />
                </footer>
            </div>

        </>
    )
}

export default InstructorStat