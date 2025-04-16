export default function Footer() {
    return (

        <>
            <footer className="py-4 bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-4">
                            <div className="logo">
                                LOGO
                            </div>
                            <p>
                                <i className="bi-bi-copyright"></i>
                            </p>
                        </div>
                        <div className="col-12 col-md-4">
                            <h3>
                                Quick Links
                            </h3>
                            <ul className="list-unstyled">
                                <li><a className="nav-link" href="#">Lorem</a></li>
                                <li><a className="nav-link" href="#">lorem</a></li>
                                <li><a className="nav-link" href="#">lorem</a></li>
                            </ul>
                        </div>
                        <div className="col-12 col-md-4">
                            <h3>
                                Lagal
                            </h3>
                            <ul className="list-unstyled">
                                <li><a className="nav-link" href="#">Privacy</a></li>
                                <li><a className="nav-link" href="#">Cookies</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}