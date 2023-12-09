import Categories from "@/components/pages/categories/Categories"
import { NextPageAuth } from "@/providers/auth-provider/auth-page.types"

const CategoriesPage: NextPageAuth = () => {
    return <Categories/>
}

CategoriesPage.isOnlyOwner = true

export default CategoriesPage