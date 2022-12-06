var organisationConfig = {
    // nl_organisationName is used in the header (and Sotd)
    nl_organisationName: "Logius",

    // this url points to the folder where organsation specific css files are stored
    // defaults to https://tools.geostandaarden.nl/respec/style/ if not set
    nl_organisationStylesURL: "https://gitdocumentatie.logius.nl/publicatie/respec/style/",

    // prefix for the names of company specific css, svg and ico prefixes
    // defaults to "GN-"
    nl_organisationPrefix: "LS-",

    // nl_organisationPublishURL points to organisation specifica publication page, used in header
    // defaults to  https://docs.geostandaarden.nl/"
    nl_organisationPublishURL: "https://gitdocumentatie.logius.nl/publicatie/",

    // nl_logo refers to company logo
    nl_logo: {
        src: "https://gitdocumentatie.logius.nl/publicatie/respec/style/logos/figure-logius.svg",
        alt: "Logius",
        id: "Logius",
        height: 77,
        width: 44,
        url: "https://www.logius.nl/standaarden",
    },
    
    localBiblio: {
        "Logius e-procurement": {
            href: "https://www.logius.nl/diensten/e-procurement",
            title: "Logius e-procurement",
            status: "Informative",
            publisher: "Logius",
        },
        "UBL-OHNL": {
            href: "https://logius.nl/diensten/digiinkoop/hoe-werkt-het/ubl-ohnl",
            titel: "UBL-OHNL",
            publisher: "Logius",
        },
        "SETU (HR-XML) - OHNL": {
            href: "https://logius.nl/diensten/digiinkoop/hoe-werkt-het/setu-hr-xml-ohnl",
            titel: "SETU (HR-XML) - OHNL",
            publisher: "Logius",
        },
    },
}
