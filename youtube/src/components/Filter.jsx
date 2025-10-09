export function Filters() {
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

    return (
        <div className="filters">
            <ul>
                {
                    filters.map((filter, index) => {
                        return (
                            <li key={index} className="filter">{filter}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}