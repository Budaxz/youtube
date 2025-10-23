import OwlCarousel from 'react-owl-carousel3'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
 
import "./Filter.css"
import { useEffect, useRef, useState } from 'react';

export function Filters() {
    const containerRef = useRef(null)
    const [useCarousel, setCarousel] = useState(false)

    const filters = [
        "Todos",
        "Jogos",
        "Música",
        "Valorant",
        "Pedicure",
        "Loreen",
        "Ao vivo",
        "Aulas",
        "Mangá",
        "Animes",
        "Vocal Music",
        "Mixes",
        "Cremosa",
        "MasterChef Brazil",
        "League of Legends",
        "Enviados recentemente",
        "Assistidos",
        "Novidades pra você"
    ];

    const options = {
        nav: false,
        margin: 10,
        dots: false,
        responsiveClass: true,
        autoplay: false,
        smartSpeed: 800,
        responsive: {
            0: {items: 2},
            480: {items: 4},
            800: {items: 8},
            1024: {items: 12},
            1600: {items: 16}
        }
    }

    useEffect(() => {
        function checkOverflow(){
            const el = continerRef.current;
            if (el) {
                
                const isOverflowing = el.scrollWidth > el.clientWidth;
                setCarousel(isOverflowing);
            }
        }

        checkOverfloww();

        window.addEventListener('resize', checkOverflow);


        console.log("UseCarousel", useCarousel);

        return () => window.addEventListener('resize', checkOverflow);
    }, [])

    return (
        <div className="filters">
            {
                useCarousel ? (
                    <OwlCarousel className="owl-theme" {...options}>
                        {
                            filters.map((filter, index) => {
                                return (
                                    <div key={index} className="filter">{filter}</div>
                                )
                            })
                        }
                    </OwlCarousel>
                ) : (
                    <div className="filter-row">
                        {
                            filters.map((filter, index) => {
                                return (
                                    <div key={index} className="filter">{filter}</div>
                                )
                            })
                        }
                    </div>
                )
            }
        </div>
    )
}