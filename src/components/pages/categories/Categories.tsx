import Button from "@/components/ui/button/Button"
import CategoryContainer from "@/components/ui/category-container/CategoryContainer"
import Link from "next/link"
import { LuPlus } from "react-icons/lu"
import styles from './Categories.module.scss'
import { useCategory } from "@/hooks/fetch/useCategory"
import ErrorContainer from "@/components/ui/error-container/ErrorContainer"

const Categories = () => {

    const {categories,deleteCategory} = useCategory()

    return (
        <>
            <div className={styles.titleContainer}>
                <h1>Категории</h1>
            </div>
            <div className={styles.linkContainer}>
                <Link href={'/categories/create-category'}>
                    <Button Icon={LuPlus} size={25} classVar={'green'}/>
                </Link>
            </div>
            {
                categories && categories.length > 0 
                ?
                categories.map( category => <CategoryContainer deleteCategory={deleteCategory} category={category} key={category.id}/>)
                :
                <ErrorContainer text="Катеорий не найдено..."/>
            }
        </>
    )
}

export default Categories