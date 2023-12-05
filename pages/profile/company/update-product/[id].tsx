import UpdateProduct from "@/components/pages/update-product/UpdateProduct"
import { IProduct } from "@/models/product.interface"
import { IStaticPaths } from "@/models/static-paths"
import { NextPageAuth } from "@/providers/auth-provider/auth-page.types"
import { ProductsService } from "@/services/products/products.service"
import { GetStaticPaths, GetStaticProps } from "next"

const UpdateProductPage: NextPageAuth<{product: IProduct}> = ({product}) => {
    return <UpdateProduct product={product}/>
}

UpdateProductPage.isOnlyOwner = true

export const getStaticPaths: GetStaticPaths<IStaticPaths> = async () => {
    const {data} = await ProductsService.getAll()

    return {
        paths: data.products.map( product => ({
            params: {
                id: product.id.toString()
            }
        })),
        fallback: 'blocking'
    }
}

export const getStaticProps: GetStaticProps<{product: IProduct}> = async ({params}) => {
    const {data} = await ProductsService.getById(String(params?.id))
    return {
        props: {
            product: data
        },
        revalidate: 60
    }
}

export default UpdateProductPage