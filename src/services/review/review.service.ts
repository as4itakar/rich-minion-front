import { instance } from "@/api/api.interceptor"
import { IReviewData } from "@/services/review/review-data.interface"
import { IReview, IReviewRate } from "@/models/review.interface"

export class ReviewService{

    static async getByProductId(productId: string | number){
       return instance.get<IReviewRate>(
            '/reviews/' + productId
        )
    }

    static async create(data: IReviewData){
        return instance.post<IReview>(
            '/reviews   ',
            {...data}
        )
    }
}