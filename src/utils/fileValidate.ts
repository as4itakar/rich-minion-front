export const fileValidate = (value: File[]) => {
    const types = ["image/jpg", "image/jpeg"] 
    for (let i = 0; i < value.length; i++){
        if (!types.includes(value[i].type)) {
            return 'Необходимые формат только jpg!'
        }
    }
    return true;
}