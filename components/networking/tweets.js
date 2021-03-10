import axios from "axios"

export const getTweets = async () => {
    try {
        const res = await axios({
            method: "get",
            url: "/api/tweets",
            headers: {
                "Content-Type": "application/json"
            },
        })
        return res
    } catch (error) {
        return error
    }
}
