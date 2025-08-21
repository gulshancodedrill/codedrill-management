import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import { Outlet } from "react-router-dom";

export default function Layout(){
    return (
        <div className="flex flex-col min-h-screen">
            {/* Header */}
            <Navbar />

            {/* Main Content */}
            <main className="flex-grow container mx-auto">
                <Outlet /> {/* Renders the child route */}
            </main>

            {/* Footer */}
            <Footer />
        </div>
    )
}