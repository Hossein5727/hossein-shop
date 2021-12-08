import React from 'react'
import Footer from '../components/footer/Footer'
import Navigation from '../components/navigation/Navigation'

function Layout({ children }) {
    return (
        <div className="flex flex-col h-screen">
            <Navigation />
            <div className="flex-1">
                {children}
            </div>
            {/* <Footer /> */}
        </div>
    )
}

export default Layout
