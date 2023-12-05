import { IFavorites } from "./favorites.interface"

export interface IProfile{
    id: number,
    name: string, 
    phone: string,
    city: string,
    address: string,
    image: string
    favorites: IFavorites[]
}