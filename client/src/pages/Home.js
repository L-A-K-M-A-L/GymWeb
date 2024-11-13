import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import HomeBody from '../components/HomeBody'

const Home = () => {
    return (
        <>
            <div className='flex flex-col min-h-screen'>
                <header className='z-10'>
                    <Header />
                </header>
                <main className='flex-grow'>
                    <HomeBody />
                </main>
                <footer>
                    <Footer />
                </footer>
            </div>
        </>
    )
}

export default Home;
