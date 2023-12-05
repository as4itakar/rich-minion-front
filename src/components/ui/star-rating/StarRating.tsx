import { Dispatch, FC, SetStateAction } from 'react'
import { Rating } from 'react-simple-star-rating'

interface IRating{
    rating?: number
    callBack?: Dispatch<SetStateAction<number>>
}

const StarRating: FC<IRating> = ({rating, callBack}) => {
    
    return <Rating onClick={callBack} initialValue={rating ? rating : 0} size={25}/>

}  

export default StarRating