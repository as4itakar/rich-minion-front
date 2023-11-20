import { instance } from "@/api/api.interceptor";
import { IOrderItemData } from "@/services/orders/order-item-data.interface";
import { IOrder } from "@/models/order.interface";

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