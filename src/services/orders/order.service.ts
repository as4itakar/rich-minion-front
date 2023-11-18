import { instance } from "@/api/api.interceptor";
import { IOrderItemData } from "@/models/request/order-item-data.interface";
import { IOrder } from "@/models/response/order.interface";

export class OrderService{

    static async create(data: IOrderItemData[]){
        return instance.post<IOrder>(
            '/orders',
            {...data}
        )
    }

    static get(){
        return instance.get<IOrder[]>(
            '/orders'
        )
    }
}