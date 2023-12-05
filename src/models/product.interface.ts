export interface IProduct{
    id: number,
    name: string, 
    description: string,
    price: number,
    images: string[],
    categoryId: number
}

export interface IQueryProducts{
    data: IStaticProducts
}

export interface IStaticProducts{
    products: IProduct[]
    length: number
}