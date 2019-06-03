export const streams = [
    {
        id: "1",
        type: "downstream",
        name: "Pump 1",
        groupName: "Pumps",
        unit: "RPM",
        max: 300,
        min: 0,
        default: 50
    },
    {
        id: "2",
        type: "downstream",
        name: "Pump 2",
        groupName: "Pumps",
        unit: "RPM",
        max: 300,
        min: 0,
        default: 50
    },
    {
        id: "3",
        type: "downstream",
        name: "Pump 3",
        groupName: "Pumps",
        unit: "RPM",
        max: 100,
        min: 0,
        default: 0
    },
    {
        id: "4",
        type: "upstream",
        name: "Temperature 1",
        groupName: "Heating",
        unit: "C",
        max: 40,
        min: 0,
        default: 0
    },
    {
        id: "5",
        type: "downstream",
        name: "Fan 1",
        groupName: "Heating",
        unit: "%",
        max: 100,
        min: 0,
        default: 70
    },
    {
        id: "6",
        type: "upstream",
        name: "pO2",
        groupName: "Analytics",
        unit: "C",
        max: 40,
        min: 0,
        default: 0
    },
    {
        id: "7",
        type: "downstream",
        name: "pH-Controller",
        groupName: "Analytics",
        unit: "-",
        max: 10,
        min: 4,
        default: 7
    },
    {
        id: "8",
        type: "downstream",
        name: "Glucose-Controller",
        groupName: "Analytics",
        unit: "Mol",
        max: 30,
        min: 5,
        default: 15
    }
];