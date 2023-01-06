import { useContext } from "react";
import { AuthContext } from "../../auth/authContext";

const CreateDestination = () => {
    const { user } = useContext(AuthContext);
    
    return (
        <section className="container-wrapper">
            <form className="create-destination">
                <label htmlFor="name">Name: </label>
                <input name="name" />
                <label htmlFor="region">Region: </label>
                <select>
                </select>
            </form>
        </section>
    )
}

export default CreateDestination;