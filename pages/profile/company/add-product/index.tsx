import AddProduct from "@/components/pages/add-product/AddProduct"
import { NextPageAuth } from "@/providers/auth-provider/auth-page.types"

const AddProductPage: NextPageAuth = () => {
    return <AddProduct/>
}

AddProductPage.isOnlyOwner = true

export default AddProductPage