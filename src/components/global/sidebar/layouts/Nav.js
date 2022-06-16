// Libraries
import React, { useContext } from 'react';
import { Accordion as MuiAccordion, AccordionDetails, AccordionSummary, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/styles';

// Core
import Ctrl from '../../../../core/global/controls/Controls';

// Constants
import { Navs } from '../../../../core/global/constants/Navs';

// Context
import { NavContext } from '../../../../core/context/NavContext';

const Nav = () => {
    const [ isActive, setIsActive, expand, setExpand ] = useContext(NavContext);

    const Accordion = styled(MuiAccordion)(({
        '& .css-1pvvkxv-MuiButtonBase-root-MuiAccordionSummary-root, .css-1uaukoe': {
            padding: 0,
            minHeight: 0,
            boxShadow: 'none',
            '& .css-1betqn-MuiAccordionSummary-content': {
                fontSize: '1.05rem',
                margin: '8px 0'
            }
        }
    }));

    return (
        <Box sx= {{ overflowY: 'scroll', '&::-webkit-scrollbar': { display: 'none' } }}>
            {
                Navs().map((nav, index) => (
                    <Box key= { index }>
                        {
                            nav.subNav.length === 0 ? (
                                <Link to= { nav.path } style= {{ textDecoration: 'none' }} onClick= { () => { setIsActive(nav.name); localStorage.setItem('nav', nav.name); setExpand(''); } }>
                                    <Ctrl.Typography text= { nav.name } color= { `${isActive === nav.name ? 'primary.main' : 'text.primary'}` }
                                        sx= {{ fontSize: { xs: '.95rem', sm: '1rem', md: '1.05rem' }, paddingLeft: { xs: '15px', md: 0 }, margin: '8px 0', transition: 'all 0.2s ease-in-out',
                                                    '&:hover': { color: 'primary.main', transition: 'all 0.2s ease-in-out' } }} />
                                </Link>
                            ) : (
                                <Accordion disableGutters expanded= { expand === nav.name } onChange= { () => setExpand(nav.name) } sx= {{ boxShadow: 'none', backgroundColor: 'transparent' }}>
                                    <AccordionSummary id= { `${nav.name}-header` } aria-controls= { `${nav.name}-content` }>
                                        <Ctrl.Typography text= { nav.name } color= { `${expand === nav.name ? 'primary.main' : 'text.primary'}` }
                                            sx= {{ fontSize: { xs: '.95rem', sm: '1rem', md: '1.05rem' }, paddingLeft: { xs: '15px', md: 0 }, transition: 'all 0.2s ease-in-out',
                                                        '&:hover': { color: 'primary.main', transition: 'all 0.2s ease-in-out' } }} />
                                    </AccordionSummary>
                                    <AccordionDetails sx= {{ padding: 0 }}>
                                        {
                                            (nav.subNav).map((sub, index) => (
                                                <Link to= { sub.path } style= {{ textDecoration: 'none' }} key= { index } 
                                                    onClick= { () => { setIsActive(sub.name); ; localStorage.setItem('nav', sub.name) } }>
                                                    <Ctrl.Typography text= { sub.name } color= { `${isActive === sub.name ? 'primary.main' : 'text.primary'}` }
                                                        sx= {{ fontSize: { xs: '.95rem', sm: '1rem', md: '1.05rem' }, paddingLeft: { xs: '25px', md: '10px' }, margin: '8px 0', transition: 'all 0.2s ease-in-out',
                                                                    '&:hover': { color: 'primary.main', transition: 'all 0.2s ease-in-out' } }} />
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