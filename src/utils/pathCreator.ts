export const pathGeneration = (path: string) => {
    const pathName = path
    return function (pathParam: string | number = '') {
        return pathName + pathParam
    }
}