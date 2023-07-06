import { Box } from '@mui/material';
import React from 'react';

const Home = () => {
    const ShowUser = JSON.parse(localStorage.getItem('user'));
    const userLength = ShowUser!==null && ShowUser.length;

    if (0 < userLength) {
        return (
            <Box sx={{
                marginTop: "auto",
                marginBottom: "auto",
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}>
                <h1 id="userLength">Total User :- {userLength}</h1>
            </Box>
        );
    } else {
        return (
            <div>
                <h1 id="userLength">No User</h1>
            </div>
        );
    }
};

export default Home;
