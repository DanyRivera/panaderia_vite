import Slider from "react-slick";
import "../styles/slick.css";
import "../styles/slick-theme.css";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const Gallery = () => {

    const settings = {
        customPaging: function (i) {
            return (
                <a>
                    <img src={`/img/${i + 1}.jpg`} />
                </a>
            );
        },
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    }

    const imagenes = [
        '/img/1.jpg',
        '/img/2.jpg',
        '/img/3.jpg',
        '/img/4.jpg',
        '/img/5.jpg',
        '/img/6.jpg',
    ]

    return (
        <section className="mb-24 hidden md:block">
            <h2 className="font-merienda font-bold text-center text-3xl md:text-4xl text-primary mb-10">Demostración</h2>

            <Slider {...settings}>
                {imagenes.map((url, index) => (
                    <div className="outline-none" key={index}>
                        <img className="w-1/2 mx-auto outline-none mb-5 rounded-[20px]" src={url} alt="Imagen Slide" />
                    </div>
                ))}
            </Slider>

        </section>
    )
}

export default Gallery