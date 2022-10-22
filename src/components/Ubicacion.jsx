
const Ubicacion = () => {
    return (
        <section className="mb-32" id="ubicacion">
            <h2 className="font-merienda font-bold text-center text-3xl md:text-4xl text-primary mb-8">Ubicación</h2>

            <div className="flex flex-col  gap-5 md:mx-10">

                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30169.699750830554!2d-98.23743615062018!3d19.054393788706946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cfc16764d377ad%3A0x2a51931c75ee5a8f!2sPanificadora%20La%20Flor%20de%20Puebla!5e0!3m2!1ses-419!2smx!4v1666384871387!5m2!1ses-419!2smx" className="border-0 h-[55vh] w-full"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

                <p className="font-rubik -order-1 mx-2 text-xl md:text-3xl tracking-wide leading-relaxed text-center">Calle 3 Sur 104, Centro histórico de Puebla, 72000 Puebla, Pue.</p>

            </div>
        </section>
    )
}

export default Ubicacion