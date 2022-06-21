// Libraries
import React from 'react';

// Layouts
import BasicInformation from '../../../components/issuance/testreport/layouts/form/layouts/BasicInformation';
import GeneralSpecification from '../../../components/issuance/testreport/layouts/form/layouts/GeneralSpecification';
import Components from '../../../components/issuance/testreport/layouts/form/layouts/Components';
import ConstructionInspection from '../../../components/issuance/testreport/layouts/form/layouts/ConstructionInspection';
import MechanicalOperation from '../../../components/issuance/testreport/layouts/form/layouts/MechanicalOperation';
import ElectricalOperation from '../../../components/issuance/testreport/layouts/form/layouts/ElectricalOperation';

export const Navs = (register, fields, append, remove) => (
    [
        {
            name: 'Basic Information',
            path: 'basic-information',
            component: <BasicInformation register= { register } />
        },
        {
            name: 'General Specification',
            path: 'general-specification',
            component: <GeneralSpecification register= { register } />
        },
        {
            name: 'Component',
            path: 'component',
            component: <Components register= { register } fields= { fields } append= { append } remove= { remove } />
        },
        {
            name: 'Construction Inspection',
            path: 'construction-inspection',
            component: <ConstructionInspection />
        },
        {
            name: 'Mechanical Operation',
            path: 'mechanical-operation',
            component: <MechanicalOperation  />
        },
        {
            name: 'Electrical Operation',
            path: 'electrical-operation',
            component: <ElectricalOperation  />
        }
    ]
)