// Libraries
import React, { useContext } from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Box } from '@mui/material';
import { Link } from 'react-router-dom';

// Constants
import { Navs } from '../../../../core/global/constants/Navs';

// Context
import { NavContext } from '../../../../core/context/NavContext';

const Nav = () => {
    const [ isActive, setIsActive, expand, setExpand ] = useContext(NavContext);

    return (
        <Box sx= {{ overflowY: 'scroll', '&::-webkit-scrollbar': { display: 'none' } }}>
            {
                Navs().map((nav, index) => (
                    <Box key= { index }>
                        {
                            nav.subNav.length === 0 ? (
                                <Link to= { nav.path } style= {{ textDecoration: 'none', color: '#000000' }} onClick= { () => { setIsActive(nav.name); localStorage.setItem('nav', nav.name); setExpand(''); } }>
                                    <Box sx= {{ width: '100%', color: `#${isActive === nav.name ? '40739e' : '2f3640'}`, fontSize: '108%', margin: '10px 0', paddingLeft: { xs: '15px', md: 0 },
                                                        '&:hover': { color: '#40739e', transition: 'all 0.2s ease-in-out' } }}>{ nav.name }</Box>
                                </Link>
                            ) : (
                                <Accordion style= {{ backgroundColor: 'transparent', border: 'none', boxShadow: 'none', margin: '10px 0' }} expanded= { expand === nav.name } 
                                    onChange= { () => setExpand(nav.name) }>
                                    <AccordionSummary id= { `${nav.name}-header` } aria-controls= { `${nav.name}-content` } style= {{ padding: '0' }}>
                                        <Box sx= {{ width: '100%', color: `#${expand === nav.name ? '40739e' : '2f3640'}`, fontSize: '108%', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', 
                                                            alignItems: 'center', paddingLeft: { xs: '15px', md: 0 },
                                                            '&:hover': { color: '#40739e', transition: 'all 0.2s ease-in-out' } }}>{ nav.name }</Box>
                                    </AccordionSummary>
                                    <AccordionDetails style= {{ padding: '0 0 0 10px', margin: '0' }}>
                                        {
                                            (nav.subNav).map((sub, index) => (
                                                <Link to= { sub.path } style= {{ textDecoration: 'none', color: '#000000' }} key= { index } 
                                                    onClick= { () => { setIsActive(sub.name); ; localStorage.setItem('nav', sub.name) } }>
                                                    <Box sx= {{ width: '100%', color: `#${isActive === sub.name ? '40739e' : '2f3640'}`, fontSize: '108%', margin: '12px 0', paddingLeft: { xs: '20px', md: 0 },
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