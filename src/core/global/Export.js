// Libraries
import React from 'react';
import ExcelFile from 'react-data-export/dist/ExcelPlugin/components/ExcelFile';
import ExcelColumn from 'react-data-export/dist/ExcelPlugin/elements/ExcelColumn';
import ExcelSheet from 'react-data-export/dist/ExcelPlugin/elements/ExcelSheet';

// Core
import Ctrl from './controls/Controls';

const Export = (props) => {
    const { element, filename, data, column } = props;

    return (
        <ExcelFile element={ <Ctrl.Button color= "excel" text= { element } variant= "contained" /> } filename= { filename }>
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