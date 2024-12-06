import {Router} from 'express';
import {getApi} from '../controllers/api.controller'

const apiRoute = Router();

apiRoute.get("/", getApi);

export default getApi