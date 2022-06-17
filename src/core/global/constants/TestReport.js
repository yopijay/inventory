// Libraries
import React from 'react';

// Layouts
import BasicInformation from '../../../components/issuance/testreport/layouts/form/layouts/BasicInformation';
import GeneralSpecification from '../../../components/issuance/testreport/layouts/form/layouts/GeneralSpecification';
import Components from '../../../components/issuance/testreport/layouts/form/layouts/Components';

export const Navs = () => (
    [
        {
            name: 'Basic Information',
            path: 'basic-information',
            component: <BasicInformation />
        },
        {
            name: 'General Specification',
            path: 'general-specification',
            component: <GeneralSpecification />
        },
        {
            name: 'Component',
            path: 'component',
            component: <Components />
        },
        {
            name: 'Construction Inspection',
            path: 'construction-inspection',
            component: 'CONSTRUCTION INSPECTION'
        },
        {
            name: 'Mechanical Operation',
            path: 'mechanical-operation',
            component: 'MECHANICAL OPERATION'
        },
        {
            name: 'Electrical Operation',
            path: 'electrical-operation',
            component: 'ELECTRICAL OPERATION'
        }
    ]
)