const Seaside = () => {
    return (
        <article className="category-info">
            <label htmlFor="isGuarded">Is the seaside location guarded by a life guard?</label>
            <input name="isGuarded" value="Yes" type="radio"/>
            <input name="isGuarded" value="No" type="radio"/>
            <label className="category-label" htmlFor="offersUmbrella">Are there umbrellas offred in the seaside location</label>
            <input name="offersUmbrella" value="Yes" type="radio"/>
            <input name="offersUmbrella" value="No" type="radio"/>
        </article>
    );
}

export default Seaside;