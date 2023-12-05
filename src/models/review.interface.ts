export interface IReview{
    id: number,
    rating: number,
    text: string,
    user: {
        email: string
    }
}

export interface IRate{
    _avg: {
        rating: number
    }
}

export interface IReviewRate{
    reviews: IReview[]
    rate: IRate
}