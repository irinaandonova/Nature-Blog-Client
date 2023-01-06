const Park = () => {
    return (
        <article className="category-info">
            <label htmlFor="hasPlayground">Does the park has playground?</label>
            <input name="hasPlayground" value="Yes" type="radio"/>
            <input name="hasPlayground" value="No" type="radio"/>
            <label className="category-label" htmlFor="isDogFriendly">Are dogs allowed in this park?</label>
            <input name="isDogFriendly" value="Yes" type="radio"/>
            <input name="isDogFriendly" value="No" type="radio"/>
        </article>
    );
}

export default Park;
