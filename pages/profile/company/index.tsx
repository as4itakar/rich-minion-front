import Company from "@/components/pages/company/Company"
import { NextPageAuth } from "@/providers/auth-provider/auth-page.types"


const CompanyPage: NextPageAuth = () => {
    return <Company/>
}

CompanyPage.isOnlyOwner = true

export default CompanyPage


