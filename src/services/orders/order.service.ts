import { instance } from "@/api/api.interceptor";
import { IOrder } from "@/models/order.interface";
import { IOrderData } from "./order-item-data.interface";

export class OrderService{

    static async create(data: IOrderData){
        return instance.post<IOrder>(
            '/orders',
            {...data}
        )
    }

    static async get(){
        return instance.get<IOrder[]>(
            '/orders'
        )
    }
}