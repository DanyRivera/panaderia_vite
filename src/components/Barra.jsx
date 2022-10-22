import { useState } from "react";
import { Link } from "react-scroll";

const Barra = () => {

    const [menu, setMenu] = useState(false);

    return (
        <>
            <div className="flex justify-between items-center px-6 py-6 md:px-24 md:py-6 shadow-lg bg-white md:fixed md:z-50 w-full">
                <h1 className="text-2xl md:text-4xl font-merienda font-bold">Panadería</h1>
                <nav className="hidden md:flex gap-10 font-merienda">
                    <Link
                        className="hover:text-primary cursor-pointer"
                        to="servicios"
                        smooth={true}
                        duration={1000}
                        offset={-150}
                    >Servicios</Link>
                    <Link
                        className="hover:text-primary cursor-pointer"
                        to="ubicacion"
                        smooth={true}
                        duration={1000}
                        offset={-150}
                    >Ubicación</Link>
                    <Link
                        className="hover:text-primary cursor-pointer"
                        to="contacto"
                        smooth={true}
                        duration={1000}
                        offset={-150}
                    >Contacto</Link>
                    <Link
                        className="hover:text-primary cursor-pointer"
                        to="acerca"
                        smooth={true}
                        duration={1000}
                        offset={-150}
                    >Acerca</Link>
                </nav>

                {!menu ? (
                    <button
                        className="md:hidden outline-none"
                        onClick={() => setMenu(true)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                        </svg>
                    </button>
                ) : (
                    <button
                        className="md:hidden outline-none"
                        onClick={() => setMenu(false)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                )}

            </div>
            {menu && (
                <nav className="animacion md:hidden flex flex-col items-center text-center my-auto gap-5 font-merienda">
                    <Link
                        className="text-primary border-y py-4  w-full"
                        to="servicios"
                        smooth={true}
                        duration={1000}
                        offset={-150}
                    >Servicios</Link>
                    <Link
                        className="text-primary border-b w-full pb-4"
                        to="ubicacion"
                        smooth={true}
                        duration={1000}
                        offset={-150}
                    >Ubicación</Link>
                    <Link
                        className="text-primary border-b w-full pb-4"
                        to="contacto"
                        smooth={true}
                        duration={1000}
                        offset={-150}
                    >Contacto</Link>
                    <Link
                        className="text-primary border-b w-full pb-4"
                        to="acerca"
                        smooth={true}
                        duration={1000}
                        offset={-150}
                    >Acerca</Link>
                </nav>
            )}
        </>
    )
}

export default Barra