import CreateCategory from "@/components/pages/create-category/CreateCategory"
import { NextPageAuth } from "@/providers/auth-provider/auth-page.types"

const CreateCategoryPage: NextPageAuth = () => {
    return <CreateCategory/>
}

CreateCategoryPage.isOnlyOwner = true

export default CreateCategoryPage