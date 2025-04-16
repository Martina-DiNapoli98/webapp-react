import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import Footer from '../Components/Footer'

export default function DefaultLayout() {
    return (
        <>
            <Header />
            <main className="mb-5">
                <Outlet />
            </main>
            <Footer />
        </>
    )
}