// Libraries
import React from 'react';
import { Box, Paper, Table, TableContainer } from '@mui/material';

// Layout
import Header from './Header';
import Body from './Body';

const Index = (props) => {
    const { data } = props;
    
    return (
        <Box sx= {{ boxShadow: 2, borderRadius: '5px', overflow: 'hidden' }}>
            <Paper elevation= { 0 }>
                <TableContainer>
                    <Table size= "small" sx= {{ minWidth: 650 }} stickyHeader>
                        <Header data= { data } />
                        <Body data= { data }/>
                    </Table>
                </TableContainer>
            </Paper>
        </Box>
    );
}

export default Index;