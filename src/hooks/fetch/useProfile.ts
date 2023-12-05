import { IProfileData } from "@/services/profile/profile-data.interface";
import { ProfileService } from "@/services/profile/profile.service";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useError } from "../useStatus";
import { errorToast } from "@/utils/toasterActions";

export const useProfile = () => {

    const { data, refetch, isError, error } = useQuery({
        queryKey: ['get profile'],
        queryFn: () => ProfileService.get(),
        select: ({data}) => data
    })

    const {mutateAsync} = useMutation({
        mutationKey: ['update profile'],
        mutationFn: ProfileService.update,
        onSuccess(){
            refetch()
        },
        onError(error) {
            errorToast(error.message)
        }
    })

    useError(isError, error?.message)

    const updateProfile = (profileData: FormData) => {
        mutateAsync(profileData)
    }
    
    return {profile: data, updateProfile}
}