import Category from "@/components/pages/category/Category"
import { ICategory } from "@/models/category.interface"
import { IStaticPaths } from "@/models/static-paths"
import { CategoryService } from "@/services/category/category.service"
import { GetStaticPaths, GetStaticProps } from "next"
import { FC } from "react"

const CategoryPage: FC<{category: ICategory}> = ({category}) => {
    return <Category category={category}/>
}

export const getStaticPaths: GetStaticPaths<IStaticPaths> = async () => {
    const {data} = await CategoryService.getAll()

    return {
        paths: data.map( category => ({
            params: {
                id: category.id.toString()
            }
        })),
        fallback: 'blocking'
    }
}

export const getStaticProps: GetStaticProps<{category: ICategory}> = async ({params}) => {
    const {data} = await CategoryService.getById(String(params?.id))
    return {
        props: {
            category: data
        },
        revalidate: 60
    }
}

export default CategoryPage