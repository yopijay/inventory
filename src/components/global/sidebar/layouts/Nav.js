// Libraries
import React from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Box } from '@mui/material';
import { Link } from 'react-router-dom';

// Constants
import { Navs } from '../../../../core/global/constants/Navs';

const Nav = () => {

    return (
        <Box sx= {{ overflowY: 'scroll', '&::-webkit-scrollbar': { display: 'none' } }}>
            {
                Navs().map((nav, index) => (
                    <Box key= { index }>
                        {
                            nav.subNav.length === 0 ? (
                                <Link to= { nav.path } style= {{ textDecoration: 'none', color: '#000000' }}>
                                    <Box sx= {{ width: '100%', color: '#2f3640', fontSize: '108%', margin: '10px 0', paddingLeft: { xs: '15px', md: 0 },
                                                        '&:hover': { color: '#40739e', transition: 'all 0.2s ease-in-out' } }}>{ nav.name }</Box>
                                </Link>
                            ) : (
                                <Accordion style= {{ backgroundColor: 'transparent', border: 'none', boxShadow: 'none', margin: '10px 0' }}>
                                    <AccordionSummary id= { `${nav.name}-header` } aria-controls= { `${nav.name}-content` } style= {{ padding: '0' }}>
                                        <Box sx= {{ width: '100%', color: '#2f3640', fontSize: '108%', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', 
                                                            alignItems: 'center', paddingLeft: { xs: '15px', md: 0 },
                                                            '&:hover': { color: '#40739e', transition: 'all 0.2s ease-in-out' } }}>{ nav.name }</Box>
                                    </AccordionSummary>
                                    <AccordionDetails style= {{ padding: '0 0 0 10px', margin: '0' }}>
                                        {
                                            (nav.subNav).map((sub, index) => (
                                                <Link to= { sub.path } style= {{ textDecoration: 'none', color: '#000000' }} key= { index }>
                                                    <Box sx= {{ width: '100%', margin: '5px 0', color: '#2f3640', fontSize: '108%', margin: '12px 0', paddingLeft: { xs: '20px', md: 0 },
                                                                        '&:hover': { color: '#40739e', transition: 'all 0.2s ease-in-out' } }}>{ sub.name }</Box>
                                                </Link>
                                            ))
                                        }
                                    </AccordionDetails>
                                </Accordion>
                            )
                        }
                    </Box>
                ))
            }
        </Box>
    );
}

export default Nav;