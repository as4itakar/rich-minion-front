import { instance } from "@/api/api.interceptor"
import { IReviewData } from "@/services/review/review-data.interface"
import { IReview, IReviewRate } from "@/models/review.interface"
import { FetchMethods } from "@/models/enums/FetchMethods"
import { Paths } from "@/utils/Paths"

export class ReviewService{

    static async getByProductId(productId: string | number){
       return instance<IReviewRate>({
            method: FetchMethods.GET,
            url: Paths.reviewPaths(productId)
       })
    }

    static async create(data: IReviewData){
        return instance<IReview>({
            method: FetchMethods.POST,
            url: Paths.reviewPaths(),
            data
        })
    }
}