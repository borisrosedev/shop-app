export class UserService {

    static async getUsers(){
        return await (await fetch('http://localhost:3000/api/users')).json()
    }

}
