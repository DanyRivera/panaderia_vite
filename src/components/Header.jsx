import Barra from "./Barra"

const Header = () => {
    return (
        <header >

            <Barra />

            <div className="bg-image flex flex-col justify-center items-center">
                <h2 className="font-merienda font-bold text-white z-20 text-5xl text-center px-2 tracking-wide leading-relaxed md:text-7xl md:leading-snug md:mt-10">El mejor lugar para el Pan y Pasteles</h2>
                <button
                    className="font-merienda z-20 bg-primary text-white px-6 py-3 mt-14 rounded-md outline-none md:text-2xl md:px-10 md:hover:bg-[#53afac] transition-all"
                >Contacto</button>
            </div>

        </header>
    )
}

export default Header