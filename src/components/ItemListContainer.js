const ItemListContainer = ({greeting}) => {
    return (
        <main>
            <h2 style={{fontSize: "3rem",
             color: "var(--azul-oscuro)",
             textShadow: "0px 3px 5px var(--neon-celeste)",
             letterSpacing: "3px",
             wordSpacing: "12px"}}>{greeting}</h2>
        </main>
    )
}

export default ItemListContainer

