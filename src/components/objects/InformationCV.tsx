interface Information {
    name: string;
    age: number;
    email: string;
    nationality: string;
    gender: string;
}

interface Education {
    begin: number;
    end: number;
    institution: string;
    place: string;
    gradePointAverage?: number;
}

interface Language {
    language: string;
    isNative: boolean;
}

export const personalInformation: Information = {
    name: 'Sefa',
    age: 28,
    email: "Due to spam only on request",
    nationality: "german",
    gender: "male", 
}

export const educations: Education[] = [
    {
        begin: 2003,
        end: 2005,
        institution: "Hauptschule an der Kapitelwiese",
        place: "Essen",
        gradePointAverage: 1.6
    },
    {
        begin: 2005,
        end: 2009,
        institution: "Richard Schirrmann Realschule",
        place: "Essen",
        gradePointAverage: 2.3,
    },
    {
        begin: 2009,
        end: 2011,
        institution: "Gymnasium Essen Nord-Ost",
        place: "Essen",
        gradePointAverage: 3.6,
    },
    {
        begin: 2011,
        end: 2013,
        institution: "Gesamtschule Essen Nord",
        place: "Essen",
        gradePointAverage: 2.6,
    },
    {
        begin: 2014,
        end: 2022,
        institution: "University of Duisburg Essen",
        place: "Essen",
        gradePointAverage: 2.6,
    }
]

export const langugaes: Language[] = [
    {
        language: "German",
        isNative: true,
    },
    {
        language: "Turkish",
        isNative: true,
    },
    {
        language: "English",
        isNative: false,
    }
];

export const activities: string[] = [
    "Studying interesting stuff", 
    "restoring/upgrading old apple macs",
    "soldering",
    "watching soccer",
    "playing soccer",
    "programming",
]