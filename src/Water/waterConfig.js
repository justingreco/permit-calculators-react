export const infrastructureFees = {
    inRaleigh: false,
    pumpStation: false,
    total: 0,
    inputs: [
        {
            label: 'Public Water',
            value: 0,
            units: 'linear feet'
        },
        {
            label: 'Public Sewer',
            value: 0,
            units: 'linear feet'
        },
        {
            label: 'Private Sewer (8" or greater)',
            value: 0,
            units: 'linear feet'
        },
        {
            label: '6" Private Sewer w/ Cleanouts ',
            value: 0,
            units: 'linear feet'
        },
        {
            label: '6" Private Sewer w/ Manholes ',
            value: 0,
            units: 'linear feet'
        },
        {
            label: 'Public Reuse',
            value: 0,
            units: 'linear feet'
        },
        {
            label: 'Water Stubs',
            value: 0,
            units: 'stubs'
        },
        {
            label: 'Sewer Stubs',
            value: 0,
            units: 'stubs'

        },
        {
            label: 'Reuse Stubs',
            value: 0,
            units: 'stubs'

        }
    ],
    fees: [
        {
            title: 'Public Water Review',
            fee: 0,
            units: 0,
            unitCost: 200.00,
            category: 'Plan Review Fees',
            inRaleighWaived: false
        },
        {
            title: 'Sewer Review',
            fee: 0,
            units: 0,
            unitCost: 200.00,
            category: 'Plan Review Fees',
            inRaleighWaived: false
        },
        {
            title: 'Public Reuse Review',
            fee: 0,
            units: 0,
            unitCost: 200.00,
            category: 'Plan Review Fees',
            inRaleighWaived: false
        },
        {
            title: 'Pump Station Review',
            fee: 0,
            units: 0,
            unitCost: 300.00,
            category: 'Plan Review Fees',
            inRaleighWaived: false
        },
        {
            title: 'CCTV Inspection',
            fee: 0,
            units: 0,
            unitCost: 1.18,
            category: 'Inspections Fees',
            inRaleighWaived: false
        },
        {
            title: 'Pump Station Inspection',
            fee: 0,
            units: 0,
            unitCost: 3000.00,
            category: 'Inspections Fees',
            inRaleighWaived: false
        },
        {
            title: 'Water Inspection',
            fee: 0,
            units: 0,
            unitCost: 1.69,
            category: 'Inspections Fees',
            inRaleighWaived: true
        },
        {
            title: 'Sewer Inspection',
            fee: 0,
            units: 0,
            unitCost: 1.69,
            category: 'Inspections Fees',
            inRaleighWaived: true
        },
        {
            title: 'Reuse Inspection',
            fee: 129,
            units: 0,
            unitCost: 0,
            category: 'Inspections Fees',
            inRaleighWaived: true
        },
        {
            title: 'Water Stubs',
            fee: 0,
            units: 0,
            unitCost: 110,
            category: 'Stub Fees',
            inRaleighWaived: true
        },
        {
            title: 'Sewer Stubs',
            fee: 0,
            units: 0,
            unitCost: 110,
            category: 'Stub Fees',
            inRaleighWaived: true
        },
        {
            title: 'Reuse Stubs',
            fee: 0,
            units: 0,
            unitCost: 110,
            category: 'Stub Fees',
            inRaleighWaived: true
        }
    ]
}
export const capitalFees = {
    total: 0,
    meterSizes: [
        {
            size: '5/8"',
            units: 0,
            selected: false,
            utilities: [
                {
                    type: 'water',
                    label: 'Water',
                    units: 0,
                    unitCost: 1447.00,
                    fee: 0
                },
                {
                    type: 'sewer',
                    label: 'Sewer',
                    units: 0,
                    unitCost: 2223.00,
                    fee: 0
                }
            ]
        },
        {
            size: '1"',
            units: 0,
            selected: false,
            utilities: [
                {
                    type: 'water',
                    label: 'Water',
                    units: 0,
                    unitCost: 3618.00,
                    fee: 0
                },
                {
                    type: 'sewer',
                    label: 'Sewer',
                    units: 0,
                    unitCost: 5558.00,
                    fee: 0
                }
            ]
        },
        {
            size: '1-1/2"',
            units: 0,
            selected: false,
            utilities: [
                {
                    type: 'water',
                    label: 'Water',
                    units: 0,
                    unitCost: 7235.00,
                    fee: 0
                },
                {
                    type: 'sewer',
                    label: 'Sewer',
                    units: 0,
                    unitCost: 11115.00,
                    fee: 0
                }
            ]
        },
        {
            size: '2"',
            units: 0,
            selected: false,
            utilities: [
                {
                    type: 'water',
                    label: 'Water',
                    units: 0,
                    unitCost: 11576.00,
                    fee: 0
                },
                {
                    type: 'sewer',
                    label: 'Sewer',
                    units: 0,
                    unitCost: 17784.00,
                    fee: 0
                }
            ]
        },
        {
            size: '4"',
            units: 0,
            selected: false,
            utilities: [
                {
                    type: 'water',
                    label: 'Water',
                    units: 0,
                    unitCost: 36175.00,
                    fee: 0
                },
                {
                    type: 'sewer',
                    label: 'Sewer',
                    units: 0,
                    unitCost: 55575.00,
                    fee: 0
                }
            ]
        },
        {
            size: '6"',
            units: 0,
            selected: false,
            utilities: [
                {
                    type: 'water',
                    label: 'Water',
                    units: 0,
                    unitCost: 72350.00,
                    fee: 0
                },
                {
                    type: 'sewer',
                    label: 'Sewer',
                    units: 0,
                    unitCost: 111150.00,
                    fee: 0
                }
            ]
        },
        {
            size: '8"',
            units: 0,
            selected: false,
            utilities: [
                {
                    type: 'water',
                    label: 'Water',
                    units: 0,
                    unitCost: 115760.00,
                    fee: 0
                },
                {
                    type: 'sewer',
                    label: 'Sewer',
                    units: 0,
                    unitCost: 177840.00,
                    fee: 0
                }
            ]
        },
        {
            size: '10"',
            utilities: [
                {
                    type: 'water',
                    label: 'Water',
                    units: 0,
                    unitCost: 303870.00,
                    fee: 0
                },
                {
                    type: 'sewer',
                    label: 'Sewer',
                    units: 0,
                    unitCost: 466830.00,
                    fee: 0
                }
            ]
        },
        {
            size: '>=12"',
            utilities: [
                {
                    type: 'water',
                    label: 'Water',
                    units: 0,
                    unitCost: 383455.00,
                    fee: 0
                },
                {
                    type: 'sewer',
                    label: 'Sewer',
                    units: 0,
                    unitCost: 589095.00,
                    fee: 0
                }
            ]
        }
    ]
}

