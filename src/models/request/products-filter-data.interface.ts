export enum EnumProductSort{
    HIGH_PRICE = 'high-price',
    LOW_PRICE = 'low-price',
    NEWEST = 'newest',
    OLDEST = 'oldest'
}

export interface IGetAllProductData{
    sort?: EnumProductSort
    searchTerm?: string
    page?: string | number
    perPage?: string | number
}