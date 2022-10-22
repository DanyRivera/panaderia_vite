
const Nosotros = () => {
    return (
        <section className="flex flex-col md:flex-row md:gap-2 my-14 md:mx-24 md:mt-24" id="acerca">
            <img className=" md:w-1/3" src="/img/nosotros.png" alt="Imagen Nosotros" />
            <div className="-order-1 md:order-1 mb-5 mx-5">
                <h3 className="font-rubik font-semibold text-2xl mb-3 text-primary">Acerca de Nosotros</h3>
                <p className="font-rubik leading-loose md:text-xl md:leading-loose">
                    Lorem ipsum id ex id tellus feugiat aliquam. Vestibulum vel efficitur arcu. Pellentesque ullamcorper sem nunc, sit amet fringilla neque dignissim nec. Proin facilisis tempus tempus. Nullam non imperdiet arcu. Pellentesque feugiat sapien lorem, vel posuere sem hendrerit eget. Cras vehicula, libero ac elementum egestas, massa massa hendrerit erat, id accumsan felis felis vitae purus. Vestibulum imperdiet feugiat elit non volutpat. Donec hendrerit molestie massa id pretium
                </p>
            </div>
        </section>
    )
}

export default Nosotros