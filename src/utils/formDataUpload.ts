export const formDataUpload = <T extends Object>(data: T) => {
    const fd = new FormData()

    for (let key in data){
        if (data[key] instanceof Object){
            const list = data[key] as FileList
            for (let i = 0; i < list.length; i++){
                fd.append(key,list[i])
            }
        }else{
            fd.append(key, data[key] as string)
        }
    }

    return fd
}