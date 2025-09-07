import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid } from '@mui/material';
import { useDispatch } from 'react-redux';

import { getPosts } from '../../actions/posts';
import Posts from '../Posts/Posts';
import Form from '../Form/Form';
import { MainContainer } from './styles';



const Home = () => {
    console.log("Home component mounted");
    const [currentId, setCurrentId] = useState(null);
    const dispatch = useDispatch();

    useEffect (() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);

    return(
        <Grow in>
            <Container>
                <MainContainer container justifyContent="space-between" alignItems="stretch" spacing={3}>
                <Grid item xs={12} sm={4}>
                    <Form currentId={currentId} setCurrentId={setCurrentId}/>
                </Grid>
                <Grid item xs={12} sm={7}>
                    <Posts setCurrentId={setCurrentId}/>
                </Grid>
                </MainContainer>
            </Container>
        </Grow>
    )
}

export default Home;