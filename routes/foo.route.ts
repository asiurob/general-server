import { Router, Request, Response } from 'express'

const fooRoute = Router()

fooRoute.get('/', (req: Request, res: Response) => {
   return res.status( 200 ).json( {message: 'Ready'} )
});


export default fooRoute