import React from "react";
import ExcelFile from "react-data-export/dist/ExcelPlugin/components/ExcelFile";
import ExcelColumn from "react-data-export/dist/ExcelPlugin/elements/ExcelColumn";
import ExcelSheet from "react-data-export/dist/ExcelPlugin/elements/ExcelSheet";
// import ReactToPrint from "react-to-print";
// import ReactExport, { } from "react-data-export";

// const ExcelFile = ReactExport.ExcelFile;
// const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
// const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

const dataSet1 = [
    {
        name: "Johson",
        amount: 30000,
        sex: 'M',
        is_married: true
    },
    {
        name: "Monika",
        amount: 355000,
        sex: 'F',
        is_married: false
    },
    {
        name: "John",
        amount: 250000,
        sex: 'M',
        is_married: false
    },
    {
        name: "Josef",
        amount: 450500,
        sex: 'M',
        is_married: true
    }
];

const dataSet2 = [
    {
        name: "Johnson",
        total: 25,
        remainig: 16
    },
    {
        name: "Josef",
        total: 25,
        remainig: 7
    }
];

const Index = () => {
    // const componentRef = useRef();
    return (
        // <div>
        //     <ReactToPrint
        //         trigger={() => {
        //         // NOTE: could just as easily return <SomeComponent />. Do NOT pass an `onClick` prop
        //         // to the root node of the returned component as it will be overwritten.
        //         return <a href="#">Print this out!</a>;
        //         }}
        //         content={() => componentRef.current}
        //     />
        //     <div ref={componentRef} />
        // </div>
        <ExcelFile element={<button>Download Data</button>} filename= "TESTING">
            <ExcelSheet data={dataSet1} name="Employees">
                <ExcelColumn label="Name" value="name"/>
                <ExcelColumn label="Wallet Money" value="amount"/>
                <ExcelColumn label="Gender" value="sex"/>
                <ExcelColumn label="Marital Status"
                                value={(col) => col.is_married ? "Married" : "Single"}/>
            </ExcelSheet>
            <ExcelSheet data={dataSet2} name="Leaves">
                <ExcelColumn label="Name" value="name"/>
                <ExcelColumn label="Total Leaves" value="total"/>
                <ExcelColumn label="Remaining Leaves" value="remaining"/>
            </ExcelSheet>
        </ExcelFile>
    );
}

export default Index