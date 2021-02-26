import axios from "axios"

export const sendContactMail = async (full_name, email, message, subject) => {
    const data = {
        full_name,
        email,
        message,
        subject
    }

    try {
        const res = await axios({
            method: "post",
            url: "/api/contact",
            headers: {
                "Content-Type": "application/json"
            },
            data
        })
        return res

    } catch (error) {
        return error
    }
}
