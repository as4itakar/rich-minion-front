export class Paths{

    static authPaths(params: string |  number = ''){
        return 'auth/' + params
    }

    static categoryPaths(params: string |  number = ''){
        return 'category/' + params
    }

    static companyPaths(params: string |  number = ''){
        return 'company/' + params
    }

    static orderPaths(params: string |  number = ''){
        return 'orders/' + params
    }

    static productsPaths(params: string |  number = ''){
        return 'products/' + params
    }

    static profilePaths(params: string |  number = ''){
        return 'profile/' + params
    }

    static reviewPaths(params: string |  number = ''){
        return 'reviews/' + params
    }

    static rolesPaths(params: string |  number = ''){
        return 'roles/' + params
    }

    static userPaths(params: string |  number = ''){
        return 'users/' + params
    }
}