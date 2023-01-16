import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CommentInterface from '../../interfaces/CommentInterface';
import { FC, useContext } from 'react';
import { useQuery } from 'react-query';
import axiosLocalInstance from '../../config/axiosConfig';
import UserInterface from '../../interfaces/UserInterface';
import { AuthContext } from '../../auth/authContext';
import { useNavigate } from 'react-router-dom';

interface CommentPropInterface {
    comment: CommentInterface
}
const Comment: FC<CommentPropInterface> = ({ comment }) => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const getUser = async () => {
        const response = await axiosLocalInstance.get(`users/${comment.creatorId}`);
        const data: UserInterface = response.data;

        return data;
    }
    const { data } = useQuery(['getCommentUser'], getUser);
    
    const onDeleteHandler = async () => {
        const response = await axiosLocalInstance.delete(`comments/${comment.id}`, { data: { userId: user.id, destinationId: comment.destinationId } })
        const data: boolean = response.data;

        if (data === true)
            navigate('/');
    }
    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Created at: {comment.date}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Username: {data?.username}
                </Typography>
                <Typography variant="body2">
                    {comment.text}
                </Typography>
            </CardContent>
            <Button onClick={onDeleteHandler}>Delete</Button>
        </Card>
    );
}


export default Comment;