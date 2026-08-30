import express from 'express';
import type {Request, Response} from 'express'
import type {Pet} from "../data/pets"
import {pets} from "../data/pets"


type PetQueryParams = {
    species?:string,
    adopted?:'true' | 'false',
    minAge?:string,
    maxAge?:string
}


export const getPets = (req: Request<{}, unknown, {}, PetQueryParams>, res: Response<Pet[]>): void=> {
    const {species, adopted, minAge, maxAge} = req.query

    let filteredQuery:Pet[] = pets;

    if(species){
        filteredQuery = filteredQuery.filter((pet:Pet):boolean => pet.species.toLowerCase() === species.toLowerCase())
    }

    if(adopted){
        filteredQuery = filteredQuery.filter((pet:Pet):boolean => pet.adopted === JSON.parse(adopted))
    }

    if(adopted){
        filteredQuery = filteredQuery.filter((pet:Pet):boolean => pet.adopted === JSON.parse(adopted))
    }

    if(minAge){
        filteredQuery = filteredQuery.filter((pet:Pet):boolean => pet.adopted >= JSON.parse(minAge))
    }

    if(maxAge){
        filteredQuery = filteredQuery.filter((pet:Pet):boolean => pet.adopted <= JSON.parse(maxAge))
    }
    res.json(filteredQuery)
}

export const getPetsById = (req:Request<{id:string}>, res:Response<Pet|{message:string}>):void=> {
    const {id} = req.params

    const pet:Pet|undefined = pets.find((pet:Pet):boolean=> pet.id.toString() === id)

    if(pet){
        res.json(pet)
    }else{
        res.status(404).json({message: "No pet with such id"})
    }

    
}