import { useState, FC } from 'react';
import FuncProp from '../interfaces/FuncPropInterface';

const HikingTrail: FC<FuncProp> = (prop) => {
    const [duration, setDuration] = useState<number>(0);
    const [difficulty, setDifficulty] = useState<number>(1);

    return (
        <article className="category-info">
            <label className="category-label">Hiking Duration:</label>
            <input name="hiking-duration" onChange={(e: React.ChangeEvent<HTMLInputElement>) => {

                prop.addInfo({ duration: Number(e.currentTarget.value), difficulty });
                setDuration(Number(e.currentTarget.value))
            }} />
            <select name="hiking-difficulty" onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                prop.addInfo({ duration, difficulty: Number(e.currentTarget.value) })
                setDifficulty(Number(e.currentTarget.value))
            }}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>
        </article>
    );
}

export default HikingTrail;