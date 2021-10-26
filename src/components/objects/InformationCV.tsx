interface Information {
    Name: string;
    Age: number;
    Email: string;
    Nationality: string;
    Gender: string;
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
    Name: 'Sefa',
    Age: 28,
    Email: "Due to spam only on request",
    Nationality: "german",
    Gender: "male", 
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
        language: "German (native speaker)",
        isNative: true,
    },
    {
        language: "Turkish (native)",
        isNative: true,
    },
    {
        language: "English",
        isNative: false,
    }
];

export const activities: string[] = [
    "Studying interesting stuff", 
    "restoring/ upgrading old apple imacs",
    "soldering",
    "watching soccer",
    "playing soccer",
    "programming",
]