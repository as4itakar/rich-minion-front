import Orders from "@/components/pages/orders/Orders";
import { NextPageAuth } from "@/providers/auth-provider/auth-page.types";

const OrdersPage: NextPageAuth = () => {
    return <Orders/>
}

OrdersPage.isOnlyOwner

export default OrdersPage