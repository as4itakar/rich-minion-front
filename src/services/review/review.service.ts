import { instance } from "@/api/api.interceptor"
import { IReviewData } from "@/models/request/review-data.interface"
import { IReview } from "@/models/response/review.interface"

export class ReviewService{

    static async getByProductId(productId: string | number){
       return instance.get<IReview[]>(
            '/reviews/' + productId
        )
    }

    static async create(productId: string | number, data:IReviewData){
        return instance.post<IReview>(
            '/reviews/'+productId,
            {...data}
        )
    }

    static async update(productId: string | number, data: IReviewData){
        return instance.put<IReview>(
            '/reviews/' + productId,
            {...data}
        )
    }
}