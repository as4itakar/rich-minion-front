import { FC } from "react";
import { IMeta } from "./Meta.interface";
import Head from "next/head";

const getTitle = (title: string) => title + ' | RICH MINION'

const Meta: FC<IMeta> = ({title, description}) => {
    return (
        <>
            <Head>
                <title>{getTitle(title)}</title>
                {
                    description 
                    ? 
                    <>
                        <meta name="description" content={description}/>
                        <meta name="og:title" content={getTitle(title)}/>
                        <meta name="og:description" content={description}/>
                    </>
                    : <meta name="robots" content="noindex, nofollow"/>
                }
            </Head>
        </>
    )
}

export default Meta