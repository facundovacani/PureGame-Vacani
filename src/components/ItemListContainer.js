const ItemListContainer = ({greeting}) => {
    return (
        <main>
            <h2 style={{fontSize: "3rem",
             color: "var(--neon-celeste)",
             textShadow: "0px 3px 5px var(--neon-rosado)",
             letterSpacing: "3px",
             wordSpacing: "12px"}}>{greeting}</h2>
        </main>
    )
}

export default ItemListContainer

