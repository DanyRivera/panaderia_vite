import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram, faFacebook, faWhatsapp, faYoutube } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"

const Contacto = () => {
    return (
        <section className="mb-32">
            <h2 className="font-merienda font-bold text-center text-3xl md:text-4xl text-primary mb-12">Contacto</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 text-center md:mx-24 gap-10 md:gap-20">
                <button className="bg-primary outline-none md:rounded-full py-10 md:py-12 text-5xl text-white md:hover:bg-[#53afac] transition-all">
                    <FontAwesomeIcon icon={faWhatsapp} />
                </button>
                <button className="bg-primary outline-none md:rounded-full py-10 md:py-12 text-5xl text-white md:hover:bg-[#53afac] transition-all">
                    <FontAwesomeIcon icon={faFacebook} />
                </button>
                <button className="bg-primary outline-none md:rounded-full py-10 md:py-12 text-5xl text-white md:hover:bg-[#53afac] transition-all">
                    <FontAwesomeIcon icon={faEnvelope} />
                </button>
                <button className="bg-primary outline-none md:rounded-full py-10 md:py-12 text-5xl text-white md:hover:bg-[#53afac] transition-all">
                    <FontAwesomeIcon icon={faInstagram} />
                </button>
                <button className="bg-primary outline-none md:rounded-full py-10 md:py-12 text-5xl text-white md:hover:bg-[#53afac] transition-all">
                    <FontAwesomeIcon icon={faYoutube} />
                </button>
            </div>

        </section>
    )
}

export default Contacto