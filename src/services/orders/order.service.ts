import { instance } from "@/api/api.interceptor";
import { IOrder } from "@/models/order.interface";
import { IOrderData } from "./order-item-data.interface";
import { pathGeneration } from "@/utils/pathCreator";
import { FetchMethods } from "@/models/enums/FetchMethods";

export class OrderService{

    private static path = pathGeneration('/orders/')

    static async create(data: IOrderData){
        return instance<IOrder>({
            method: FetchMethods.POST,
            url: this.path(),
            data
        })
    }

    static async get(){
        return instance<IOrder[]>({
            method: FetchMethods.GET,
            url: this.path()
        })
    }
}