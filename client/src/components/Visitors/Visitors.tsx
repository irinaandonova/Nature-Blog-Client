import { Button, Box, Typography, Alert, AlertTitle } from "@mui/material";
import { FC, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/authContext";
import axiosLocalInstance from "../../config/axiosConfig";
import UserInterface from "../../interfaces/UserInterface";

interface VisitorsProp {
    visitors?: UserInterface[],
    destinationId?: number,
    creatorId?: number
}

const Visitors: FC<VisitorsProp> = ({ visitors, destinationId, creatorId }) => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const onVisitHandler = async () => {
        if (!user.id)
            navigate('/login');
        else if (user.id === creatorId)
            return (
                <Alert severity="error">
                    Creator cannot change visit status
                </Alert>
            );
        else {
            const response = await axiosLocalInstance.post(`destinations/${destinationId}/visit`, {
                userId: creatorId
            });

            if (response.status == 'ok')
                console.log('ok');
        }
    }
    return (
        <Box>

            {
                visitors?.length === 1
                    ?
                    <Typography>{visitors[0].username} has visited this destination</Typography>
                    :
                    <Typography>{visitors?.length} have visited this destination</Typography>
            }

            <Button variant="contained" disableElevation onClick={onVisitHandler}>
                Visit destination
            </Button>
        </Box>

    )
}

export default Visitors;