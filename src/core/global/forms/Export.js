// Libraries
import React from 'react';
import ExcelFile from 'react-data-export/dist/ExcelPlugin/components/ExcelFile';
import ExcelColumn from 'react-data-export/dist/ExcelPlugin/elements/ExcelColumn';
import ExcelSheet from 'react-data-export/dist/ExcelPlugin/elements/ExcelSheet';
import { Box } from '@mui/material';

const Export = (props) => {
    const { element, filename, data, column } = props;

    return (
        <ExcelFile element={ <Box sx= {{ padding: '8px 10px', color: "#FFFFFF", backgroundColor: "#1b8a0d",
                                                            borderRadius: '4px', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }}>{ element }</Box> } 
                        filename= { filename }>
            <ExcelSheet data={ data !== undefined ? data : [] } name= { filename }>
                {
                    column.map((cols, index) => (
                        <ExcelColumn label= { `${cols.replaceAll('_', ' ').charAt(0).toUpperCase() + cols.replaceAll('_', ' ').slice(1)}` } value= { `${cols}` } key= { index } />
                    ))
                }
            </ExcelSheet>
        </ExcelFile>
    )
}

export default Export;