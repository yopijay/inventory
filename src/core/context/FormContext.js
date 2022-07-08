// LIbraries
import React, { createContext, useState } from 'react';
import { useParams } from 'react-router-dom';

// Constants
import { days, months, status, years } from '../global/constants/Options';

export const FormContext = createContext();

export const FormProvider = (props) => {
    const { type } = useParams();
    const [ loader, setLoader ] = useState(false);
    const [ isLoad, setIsload ] = useState(type !== 'new');
    const [ chck, setChck ] = useState();
    const [ opt, setOpt ] = useState();
    const [ departmentId, setDepartmentId ] = useState();
    const [ positionId, setPositionId ] = useState();
    const [ civilstatusId, setCivilstatusid ] = useState();
    const [ bmonthId, setBmonthid ] = useState();
    const [ bdayId, setBdayid ] = useState();
    const [ byearId, setByearid ] = useState();
    const [ bmonth, setBmonth ] = useState(months());
    const [ bday, setBday ] = useState(days());
    const [ byear, setByear ] = useState(years());
    const civilstatus = status();

    return (
        <FormContext.Provider 
            value= {{ loader, setLoader, isLoad, setIsload, chck, setChck, opt, setOpt, departmentId, setDepartmentId, positionId, setPositionId, 
                            civilstatusId, setCivilstatusid, bmonth, bday, byear, civilstatus, bmonthId, setBmonthid, bdayId, setBdayid, byearId, setByearid,
                            setBmonth, setBday, setByear }}>
            { props.children }
        </FormContext.Provider>
    )
}