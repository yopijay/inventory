// Libraries
import React from 'react';
import ExcelFile from 'react-data-export/dist/ExcelPlugin/components/ExcelFile';
import ExcelColumn from 'react-data-export/dist/ExcelPlugin/elements/ExcelColumn';
import ExcelSheet from 'react-data-export/dist/ExcelPlugin/elements/ExcelSheet';

const Export = (props) => {
    const { element, filename, data, column } = props;

    return (
        <ExcelFile element={ element } filename= { filename }>
        <ExcelSheet data={ data !== undefined ? data : [] } name= { filename }>
            {
                column.map((cols, index) => (
                    <ExcelColumn label= { `${cols.replace('_', ' ').charAt(0).toUpperCase() + cols.replace('_', ' ').slice(1)}` } value= { `${cols}` } key= { index } />
                ))
            }
        </ExcelSheet>
    </ExcelFile>
    )
}

export default Export;