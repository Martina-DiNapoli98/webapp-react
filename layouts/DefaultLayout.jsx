import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import Footer from '../Components/Footer'
import GlobalContext from "../Contexts/GlobalContext";
import { useContext } from "react";
import LoaderComponent from "../Components/LoaderComponent";

export default function DefaultLayout() {

    const { isLoading } = useContext(GlobalContext)

    return (
        <>
            <Header />
            <main className="mb-5" style={{ minHeight: 'calc(100vh - 56px)' }}>
                {isLoading && (
                    <LoaderComponent />
                )}
                <Outlet />
            </main>
            <Footer />
        </>
    )
}