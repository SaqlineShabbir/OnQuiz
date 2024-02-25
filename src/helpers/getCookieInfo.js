

import jwt from "jsonwebtoken";


export const getCookieInfo = (request) => {
    try {
        const token = request.cookies.get('accessToken')?.value || ''
        const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET)
        return decodedToken.id
    } catch (error) {
        throw new Error(error.message)

    }
}