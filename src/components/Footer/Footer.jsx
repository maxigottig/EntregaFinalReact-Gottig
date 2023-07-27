import "./Footer.css";



// Importa los iconos de marcas que desees utilizar en tu footer


export const Footer = () => {
    return (
        <div className="footer-container max-width-container">
            <footer className="site-footer">
                <div className="container">

                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <h6>Sobre nosotros</h6>
                            <p className="text-justify">Hoy por hoy, combinamos ese espíritu innovador con un renovado sentido de compromiso hacia los consumidores. Es por ello que nuestros teléfonos utilizan el Sistema Operativo Android, el más popular del mundo. Android brinda la apertura necesaria para que internet se haya integrado al mundo de la telefonía móvil. Es también por ello que estamos dedicados a ofrecer equipos al alcance de todo el mundo, sin comprometer la calidad, la experiencia ni el estilo.
                            </p>
                        </div>

                        <div className="col-xs-6 col-md-3">
                            <h6>Categories</h6>
                            <ul className="footer-links">

                                <li><a href="">Comprar</a></li>

                                <li><a href="">Resolucion de problemas</a></li>
                            </ul>
                        </div>

                        <div className="col-xs-6 col-md-3">
                            <h6>Quick Links</h6>
                            <ul className="footer-links">
                                <li><a href="">Ayuda</a></li>
                                <li><a href="">Contactanos</a></li>

                                <li><a href="">Mas informacion</a></li>
                            </ul>
                        </div>
                    </div>
                    <hr />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-sm-6 col-xs-12">
                            <p className="copyright-text">
                                Copyright &copy; 2023 All Rights Reserved by{' '}
                                <a href="#">Motorola - By Maxi Gottig</a>.
                            </p>
                        </div>


                    </div>
                </div>
            </footer>
        </div>

    );
};
