// Libraries
import React from 'react';
import { Box, Grid } from '@mui/material';

// Core
import Ctrl from '../../../../../core/global/controls/Controls';
import PDF from '../../../../../core/global/PDF';
import Export from '../../../../../core/global/Export';
import Print from '../../../../../core/global/Print';

// Loader
import { SnakeLoader } from '../../../../../core/loader/Loader';

// Assets
import Logo from '../../../../../assets/images/profile.jpg';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import ArticleSharpIcon from '@mui/icons-material/ArticleSharp';
import LocalPrintshopSharpIcon from '@mui/icons-material/LocalPrintshopSharp';

const Body = (props) => {
    const { data, isLoad } = props;

    return (
        <Box>
            { 
                !isLoad ? 
                    data.length !== 0 ? (
                        <Grid container direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 2 } sx= {{ padding: '10px 15px' }}>
                            {
                                data.map((ctgry, index) => (
                                    <Grid item key= { index }>
                                        <Grid container direction= "row" justifyContent= "flex-start" alignItems= "center" spacing= { 2 }>
                                            <Grid item sm= { 2 } sx= {{ display: { xs: 'none', sm: 'block' } }}>
                                                <Ctrl.Typography text= { ctgry.series_no } color= "#34495e" 
                                                    style= {{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', width: '100%' }} />
                                            </Grid>
                                            <Grid item xs= { 5 } sm= { 4 }>
                                                <Ctrl.Typography text= { ctgry.name } color= "#34495e" 
                                                    style= {{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', width: '100%' }} />
                                            </Grid>
                                            <Grid item xs= { 3 } sm= { 3 } sx= {{ textAlign: 'center' }}>
                                                <Ctrl.Typography text= { ctgry.total } color= "#34495e" 
                                                    style= {{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', width: '100%' }}  textAlign= "center" />
                                            </Grid>
                                            <Grid item xs= { 4 } sm= { 3 } sx= {{ textAlign: 'center' }}>
                                                <Box sx= {{ display: 'flex', flexDirectin: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                                    <Box sx= {{ margin: '5px' }}>
                                                        <PDF name= { `${ctgry.name} Report` } element= { <PictureAsPdfIcon style= {{ fontSize: '250%', color: '#b2bec3' }} /> } 
                                                                    logo= {{ img: Logo, w: 10, h: 10, type: 'JPEG' }} />
                                                    </Box>
                                                    <Box sx= {{ margin: '5px' }}>
                                                        <Print name= "Category Report" 
                                                            element= { () => <button style= {{ backgroundColor: 'transparent', border: 'none', fontFamily: 'Gilroy Light', margin: 0, padding: 0 }}>
                                                                                            <LocalPrintshopSharpIcon style= {{ fontSize: '250%', color: '#b2bec3' }} />
                                                                                        </button> } content={ [] } />
                                                    </Box>
                                                    <Box sx= {{ margin: '5px' }}>
                                                        <Export element= { <button style= {{ backgroundColor: 'transparent', border: 'none', fontFamily: 'Gilroy Light', margin: 0, padding: 0 }}>
                                                                                            <ArticleSharpIcon style= {{ fontSize: '250%', color: '#b2bec3' }} />
                                                                </button> } filename= { `${ctgry.name} Report` } data= { [] } column= { [] } />
                                                    </Box>
                                                </Box>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                ))
                            }
                        </Grid>
                    )
                     : (
                        <Grid container direction= "row" justifyContent= "center" alignItems= "center" spacing= { 1 }>
                            <Grid item>
                                <Ctrl.Typography text= "No report found!" color= "#bdc3c7" style= {{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', width: '100%' }} />
                            </Grid>
                        </Grid>
                    )
                 : (
                    <Grid container direction= "row" justifyContent= "center" alignItems= "center">
                        <Grid item sx= {{ marginTop: '10px' }}><SnakeLoader bg= "#b2bec3" size= "7px" distance= "7px" /></Grid>
                    </Grid>
                )
            }
        </Box>
    );
}

export default Body;