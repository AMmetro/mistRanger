// import axios from 'axios'
//
// const settings = {
//     withCredentials: false
// };
//
// export const url = 'http://localhost:3000/'
//
// export const instance = axios.create({
//     baseURL: url,
//     ...settings
// })
//
// export const API = {
//     getPosts() {
//         return instance.get('posts')
//     },
//     getPost(id:any) {
//         return instance.get(`posts/${id}`)
//     },
//     addPost(post:Object) {
//         { return Promise.resolve(instance.post('add-post/', post) )   }
//     },
//     deletePost(id:any) {
//         { return Promise.resolve(instance.delete(`posts/${id}`) )   }
//     },
// }

const PORT = 3000


export const API = {

    async getUnit(id:string): Promise<any> {
        let response = await fetch(`http://localhost:${PORT}/units/posts/${id}`,
            {
                method: 'GET',
                headers: {},
            })
        return response.json();
    },

    async deletePost(id:any): Promise<any> {
        let response = await fetch(`http://localhost:${PORT}/units/posts/${id}`,
            {
                method: 'DELETE',
                headers: {},
            })
        return response.json();
    },

    async editUnit(updatedUnit: any): Promise<any> {
        let response = await fetch(`http://localhost:${PORT}/units/edit/`,
            {
                method: 'PUT',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'},
                body: new URLSearchParams(updatedUnit)
            })
        return response;
    },

    async getAllUnits(): Promise<any> {
        let response = await fetch(`http://localhost:${PORT}/units/posts`,
            {
                method: 'GET',
                headers: {},
            })
        return response.json();
    },


    async addUnit(post:any):Promise<any> {
        let response = await fetch(`http://localhost:${PORT}/units/add-post/`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
                body: new URLSearchParams(post)
            })
        return response
    }
}






