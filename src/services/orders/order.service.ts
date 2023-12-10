import { instance } from "@/api/api.interceptor";
import { IOrder } from "@/models/order.interface";
import { IOrderData } from "./order-item-data.interface";
import { FetchMethods } from "@/models/enums/FetchMethods";
import { Paths } from "@/utils/Paths";

export class OrderService{

    static async create(data: IOrderData){
        return instance<IOrder>({
            method: FetchMethods.POST,
            url: Paths.orderPaths(),
            data
        })
    }

    static async get(){
        return instance<IOrder[]>({
            method: FetchMethods.GET,
            url: Paths.orderPaths()
        })
    }
}