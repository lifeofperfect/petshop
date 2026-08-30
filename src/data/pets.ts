export type Pet = {
    id: number,
    name: string,
    species: string,
    breed: string,
    adopted: boolean,
    age: number,
    intakeDate: Date,
    adoptionDate?: Date
    medicalRecord: {
        vaccinations: string[],
        weightKg: number,
        microchipId: null | string
    },
    photo: string
}

export const pets: Pet[] = [
    {
        id: 1,
        name: "Rubik",
        species: "Cat",
        breed: "Domestic Shorthair",
        adopted: true,
        age: 3,
        intakeDate: new Date("2025-11-02"),
        adoptionDate: new Date("2026-01-14"),
        medicalRecord: {
            vaccinations: ["Rabies", "FVRCP"],
            weightKg: 4.2,
            microchipId: "985141000123401"
        },
        photo: "/images/pets/rubik.jpg"
    },
    {
        id: 2,
        name: "Biscuit",
        species: "Dog",
        breed: "Labrador Retriever",
        adopted: false,
        age: 5,
        intakeDate: new Date("2026-01-18"),
        medicalRecord: {
            vaccinations: ["Rabies", "DHPP", "Bordetella"],
            weightKg: 28.7,
            microchipId: "985141000123402"
        },
        photo: "/images/pets/biscuit.jpg"
    },
    {
        id: 3,
        name: "Pepper",
        species: "Dog",
        breed: "Border Collie",
        adopted: false,
        age: 2,
        intakeDate: new Date("2026-03-07"),
        medicalRecord: {
            vaccinations: ["Rabies", "DHPP"],
            weightKg: 18.4,
            microchipId: null
        },
        photo: "/images/pets/pepper.jpg"
    },
    {
        id: 4,
        name: "Willow",
        species: "Cat",
        breed: "Maine Coon",
        adopted: true,
        age: 7,
        intakeDate: new Date("2025-08-23"),
        adoptionDate: new Date("2025-10-05"),
        medicalRecord: {
            vaccinations: ["Rabies", "FVRCP", "FeLV"],
            weightKg: 6.9,
            microchipId: "985141000123404"
        },
        photo: "/images/pets/willow.jpg"
    },
    {
        id: 5,
        name: "Mango",
        species: "Rabbit",
        breed: "Holland Lop",
        adopted: false,
        age: 1,
        intakeDate: new Date("2026-05-12"),
        medicalRecord: {
            vaccinations: ["Myxomatosis", "RHDV2"],
            weightKg: 1.6,
            microchipId: null
        },
        photo: "/images/pets/mango.jpg"
    },
    {
        id: 6,
        name: "Atlas",
        species: "Dog",
        breed: "German Shepherd",
        adopted: false,
        age: 8,
        intakeDate: new Date("2026-06-29"),
        medicalRecord: {
            vaccinations: [],
            weightKg: 34.1,
            microchipId: null
        },
        photo: "/images/pets/atlas.jpg"
    },
    {
        id: 7,
        name: "Clementine",
        species: "Cat",
        breed: "Siamese",
        adopted: true,
        age: 4,
        intakeDate: new Date("2026-02-11"),
        adoptionDate: new Date("2026-04-03"),
        medicalRecord: {
            vaccinations: ["Rabies", "FVRCP"],
            weightKg: 3.8,
            microchipId: "985141000123407"
        },
        photo: "/images/pets/clementine.jpg"
    },
    {
        id: 8,
        name: "Otto",
        species: "Dog",
        breed: "Dachshund",
        adopted: false,
        age: 6,
        intakeDate: new Date("2026-04-20"),
        medicalRecord: {
            vaccinations: ["Rabies", "DHPP", "Leptospirosis"],
            weightKg: 9.3,
            microchipId: "985141000123408"
        },
        photo: "/images/pets/otto.jpg"
    },
    {
        id: 9,
        name: "Juniper",
        species: "Rabbit",
        breed: "Flemish Giant",
        adopted: true,
        age: 2,
        intakeDate: new Date("2025-12-09"),
        adoptionDate: new Date("2026-02-27"),
        medicalRecord: {
            vaccinations: ["Myxomatosis", "RHDV2"],
            weightKg: 6.1,
            microchipId: "985141000123409"
        },
        photo: "/images/pets/juniper.jpg"
    },
    {
        id: 10,
        name: "Sable",
        species: "Cat",
        breed: "Bombay",
        adopted: false,
        age: 10,
        intakeDate: new Date("2026-07-15"),
        medicalRecord: {
            vaccinations: ["Rabies"],
            weightKg: 5.4,
            microchipId: null
        },
        photo: "/images/pets/sable.jpg"
    }
]
