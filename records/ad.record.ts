import {AdEntity} from "../types";
import {ValidationError} from "../utils/errors";

interface NewAdEntity extends Omit<AdEntity, 'id'> {
    id?: string
}

export class AdRecord implements AdEntity {
    public id: string;
    public name: string;
    public description: string;
    public price: number;
    public url: string;
    public lat: number;
    public lon: number;

    constructor(obj: NewAdEntity) {
        if (!obj.name || obj.name.length > 100) {
            throw new ValidationError('The name of the advertisement cannot be empty and cannot be longer than 100' +
                ' characters.')
        }

        if (obj.description.length > 1000){
            throw new ValidationError('The content of the advertisement cannot be longer than 1000 characters.')
        }

        if (obj.price < 0 || obj.price > 9999999) {
            throw new ValidationError('The price cannot be less than 0 or more than 9,999,999.')
        }

        // @TODO: Check if url is valid!

        if (!obj.url || obj.url.length > 100) {
            throw new ValidationError('The ad link cannot be empty and exceed 100 characters.')
        }

        if (typeof obj.lat !== 'number' || typeof obj.lon !== 'number'){
            throw new ValidationError('The ad could not be located.')
        }

        this.name = obj.name;
        this.description = obj.description;
        this.price = obj.price;
        this.url = obj.url;
        this.lat = obj.lat;
        this.lon = obj.lon;
    }
}