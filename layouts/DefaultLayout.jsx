import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import Footer from '../Components/Footer'
import GlobalContext from "../Contexts/GlobalContext";
import { useContext } from "react";

export default function DefaultLayout() {

    const { isLoading } = useContext(GlobalContext)

    return (
        <>
            <Header />
            <main className="mb-5" style={{ minHeight: 'calc(100vh - 56px)' }}>
                {isLoading && (
                    <div className="d-flex justify-content-center align-items-center vh-100">
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading..</span>
                        </div>
                    </div>
                )}
                <Outlet />
            </main>
            <Footer />
        </>
    )
}