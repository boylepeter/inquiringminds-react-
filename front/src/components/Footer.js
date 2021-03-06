import Puglia from "../images/puglia1.jpg";
import Puglia2 from "../images/puglia2.png";
import Spain from "../images/spain.jpg";
import Cole from "../images/cole.jpg";
import West from "../images/west.png";
import Ireland from "../images/ireland.png";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="page-footer font-small mdb-color lighten-3 pt-4">
            <div className="container">
                <div className="row">
                    <div className="col-lg-2 col-md-12 mb-4">
                        <div className="view overlay z-depth-1-half">
                            <img src={Puglia} className="img-fluid" alt="Puglia, Italy" />
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-6 mb-4">
                        <div className="view overlay z-depth-1-half">
                            <img src={West} className="img-fluid" alt="American West" />
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-6 mb-4">
                        <div className="view overlay z-depth-1-half">
                            <img src={Spain} className="img-fluid" alt="Streets of Spain" />
                        </div>

                    </div>
                    <div className="col-lg-2 col-md-12 mb-4">
                        <div className="view overlay z-depth-1-half">
                            <img src={Cole} className="img-fluid" alt="Cole Porter" />
                        </div>

                    </div>
                    <div className="col-lg-2 col-md-6 mb-4">
                        <div className="view overlay z-depth-1-half">
                            <img src={Ireland} className="img-fluid" alt="Ireland" />
                        </div>

                    </div>
                    <div className="col-lg-2 col-md-6 mb-4">
                        <div className="view overlay z-depth-1-half">
                            <img src={Puglia2} className="img-fluid" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-copyright text-center py-3"> Inquiring Minds LLC || Contact us at rosanne.losee@gmail.com
            </div>
            <div className="disclaimer">
                The materials on this site are the sole property of Inquiring Minds Lifelong Learning and are intended for the enjoyment of residents of the facility designated - under the supervision of the Lifestyle Manager.  Cannot be copied, distributed, or allowed to leave the facility premises.</div>
        </footer>

    );
};

export default Footer;