import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid } from '@mui/material';
import { useDispatch } from 'react-redux';

import { getPosts } from './actions/posts';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import memories from './images/memories.png';
import { StyledAppBar, Heading, Image, MainContainer } from './styles';

const App = () => {
    const [currentId, setCurrentId] = useState(null);
    const dispatch = useDispatch();

    useEffect (() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);

    return (
        <Container maxWidth="lg">
        <StyledAppBar position="static" color="inherit">
            <Heading variant="h2" align="center">
            Memories
            </Heading>
            <Image src={memories} alt="memories" height="60" />
        </StyledAppBar>

        <Grow in>
            <Container>
                <MainContainer container justifyContent="space-between" alignItems="stretch" spacing={3}>
                <Grid item xs={12} sm={7}>
                    <Posts setCurrentId={setCurrentId}/>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Form currentId={currentId} setCurrentId={setCurrentId}/>
                </Grid>
                </MainContainer>
            </Container>
        </Grow>

        </Container>
    );
};

export default App;