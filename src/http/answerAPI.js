import {$host} from "./index";

export const createAnswer = async (email, answer) => {
    try {
        const {data} = await $host.post('api/answers', {email, answer})
        return data
    } catch (error) {
        return
    } 
}

export const fetchAnswers = async (page, limit, order) => {
    try {
        const {data} = await $host.get('api/answers', {params: {
            page, limit, order
        }})
        return data
    } catch (error) {
        return
    }
}
