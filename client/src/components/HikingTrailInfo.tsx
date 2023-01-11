import { useState, useContext } from 'react';
import { DestinationContext } from '../context/destinationContext';

const HikingTrail = () => {
    const [duration, setDuration] = useState<number>(0);
    const [difficulty, setDifficulty] = useState<number>(1);
    
    const { addHikingTrailInfo } = useContext(DestinationContext);
    
    
    return (
        <article className="category-info">
            <label className="category-label">Hiking Duration:</label>
            <input name="hiking-duration" onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
                {
                    addHikingTrailInfo({duration: Number(e.currentTarget.value), difficulty});
                    setDuration(Number(e.currentTarget.value))}}/>
            <select name="hiking-difficulty" onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setDifficulty(Number(e.currentTarget.value))}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>
        </article>
    );
}

export default HikingTrail;