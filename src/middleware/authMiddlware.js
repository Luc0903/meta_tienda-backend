import jwt from 'jsonwebtoken'

export default async function AuthMiddleware(req, res, next){
    
    const authenticationHeader = req.headers.authorization;
    if( !authenticationHeader || !authenticationHeader.startsWith('Bearer ') ) {
        res.send('Invalid header')
    }

    const token = authenticationHeader.split(' ')[1]

    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET)
        req.user = { user_id: payload.user_id, name: payload.name }
        next()
    } catch (error) {        
       res.send( error )
    }

}