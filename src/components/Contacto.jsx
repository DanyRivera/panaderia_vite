import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram, faFacebook, faWhatsapp, faYoutube } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"

const Contacto = () => {
    return (
        <section className="mb-32" id="contacto">
            <h2 className="font-merienda font-bold text-center text-3xl md:text-4xl text-primary mb-12">Contacto</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 text-center md:mx-24 gap-10 md:gap-24">
                <a className="bg-primary cursor-pointer flex items-center justify-center md:rounded-full py-10 md:py-[3rem] md:px-[4.5rem] 2xl:py-[4.2rem] 2xl:text-6xl text-5xl text-white md:hover:bg-[#53afac] transition-all">
                    <FontAwesomeIcon icon={faWhatsapp} />
                </a>
                <a className="bg-primary cursor-pointer flex items-center justify-center md:rounded-full py-10 md:py-[3rem] md:px-[4.5rem] 2xl:py-[4.2rem] 2xl:text-6xl text-5xl text-white md:hover:bg-[#53afac] transition-all">
                    <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a className="bg-primary cursor-pointer flex items-center justify-center md:rounded-full py-10 md:py-[3rem] md:px-[4.5rem] 2xl:py-[4.2rem] 2xl:text-6xl text-5xl text-white md:hover:bg-[#53afac] transition-all">
                    <FontAwesomeIcon icon={faEnvelope} />
                </a>
                <a className="bg-primary cursor-pointer flex items-center justify-center md:rounded-full py-10 md:py-[3rem] md:px-[4.5rem] 2xl:py-[4.2rem] 2xl:text-6xl text-5xl text-white md:hover:bg-[#53afac] transition-all">
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a className="bg-primary cursor-pointer flex items-center justify-center md:rounded-full py-10 md:py-[3rem] md:px-[4.5rem] 2xl:py-[4.2rem] 2xl:text-6xl text-5xl text-white md:hover:bg-[#53afac] transition-all">
                    <FontAwesomeIcon icon={faYoutube} />
                </a>
            </div>

        </section>
    )
}

export default Contacto