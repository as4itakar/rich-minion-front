import { instance } from "@/api/api.interceptor"
import { IReviewData } from "@/services/review/review-data.interface"
import { IReview, IReviewRate } from "@/models/review.interface"
import { pathGeneration } from "@/utils/pathCreator"
import { FetchMethods } from "@/models/enums/FetchMethods"

export class ReviewService{

    private static path = pathGeneration('/reviews/')

    static async getByProductId(productId: string | number){
       return instance<IReviewRate>({
            method: FetchMethods.GET,
            url: this.path(productId)
       })
    }

    static async create(data: IReviewData){
        return instance<IReview>({
            method: FetchMethods.POST,
            url: this.path(),
            data
        })
    }
}