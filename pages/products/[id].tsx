import ProductInfo from "@/components/pages/product-info/ProductInfo"
import { IProduct } from "@/models/product.interface"
import { IStaticPaths } from "@/models/static-paths"
import { ProductsService } from "@/services/products/products.service"
import { GetStaticPaths, GetStaticProps } from "next"
import { FC } from "react"


const ProductPage: FC<{product: IProduct}> = ({product}) => {
    return <ProductInfo product={product}/>
}

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

export default ProductPage