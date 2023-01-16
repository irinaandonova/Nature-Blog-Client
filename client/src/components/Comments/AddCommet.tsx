import { Button, TextField } from "@mui/material";
import { Container } from "@mui/system";
import { useContext, useState } from "react";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../auth/authContext";
import axiosLocalInstance from "../../config/axiosConfig";

const AddComment = () => {
    const { id } = useParams();
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmitHandler = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        const target = e.target as typeof e.target & {
            text: { value: string }
        }

        await addComment(target.text.value);

    }
    const addComment = async (text: string) => {
        const response = await axiosLocalInstance.post('comments', {
            destinationId: id,
            creatorId: user.id,
            text
        });

        if (response.status === 200)
            navigate('/');
    }

    return (
        <Container>
            <form onSubmit={onSubmitHandler}>
                <TextField multiline rows={4} label="Add Comment" name="text" />
                <Button type="submit">Add comment</Button>
            </form>
        </Container>
    )
}

export default AddComment;