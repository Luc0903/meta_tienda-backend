import User from './userModel.js'
import { StatusCodes } from 'http-status-codes';

export async function Register(req, res){

    const user = await User.create({...req.body})

    const token = user.createJWT()

    res.status(StatusCodes.CREATED).send({user, token})
}

export async function Login(req, res){

    const {email, password} = req.body;
    if( !email || !password ) res.send('No email or password provided')

    const user = await User.findOne({ email }) 
    if ( !user ) res.send('Invalid Credentials')

    const isPasswordCorrect = await user.comparePasswords(password)
    if ( !isPasswordCorrect ) res.send('Invalid Credentials')

    const token = user.createJWT()

    res.status(StatusCodes.OK).json({ user: { name: user.name }, token })

}
