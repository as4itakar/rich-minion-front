import styles from './Company.module.scss'
import { useCompany } from '@/hooks/fetch/useCompany';
import CompanyProducts from '@/components/ui/company-products/CompanyProducts';

const Company = () => {

    const {company} = useCompany()
 
    return (
        <div className={styles.companyContainer}>
            <div className={styles.infoContainer}>
                <h1>{company?.name}</h1>
                <p>{company?.description}</p>
            </div>
            {
                company && <CompanyProducts company={company}/>
            }
        </div>
    )
    
}

export default Company