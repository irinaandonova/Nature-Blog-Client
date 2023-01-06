const HikingTrail = () => {
    return (
        <article className="category-info">
            <label className="category-label">Hiking Duration:</label>
            <input name="hiking-duration" />
            <select name="hiking-difficulty">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>
        </article>
    );
}

export default HikingTrail;