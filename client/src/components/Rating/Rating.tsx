import { Stack } from "@mui/system";
import { Rating } from "@mui/material";
import { useContext, FC } from "react";
import { AuthContext } from "../../auth/authContext";
import axiosLocalInstance from "../../config/axiosConfig";
import { useParams } from "react-router-dom";

interface ratingProp {
    ratingScore?: number,
    readonly: boolean
}

const RatingComponent: FC<ratingProp> = ({ ratingScore, readonly }) => {
    const { user } = useContext(AuthContext);
    const { id } = useParams();
    
    const onVoteHandler = async(vote: number | null) => {
        const response = await axiosLocalInstance.post(`destinations/${id}/rate`, {
            userId: user.id,
            ratingValue: vote
        });

        if(response.status === 200)
        console.log('success');
    }
    return (
        <Stack spacing={1}>
            {
                user.id && !readonly
                    ?
                    <Rating name="half-rating" defaultValue={ratingScore} precision={0.5} onChange={(event: React.SyntheticEvent, value: number | null) => onVoteHandler(value)}/>
                    :
                    <Rating name="half-rating-read" defaultValue={ratingScore} precision={0.5} readOnly />
            }
        </Stack>
    )
}

export default RatingComponent;