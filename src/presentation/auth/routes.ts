import { Router } from 'express';
import { AuthController } from './controller'; // 1
import { AuthDataSourceImpl, AuthRepositoryImpl } from '../../infraestructure'; // 5

export class AuthRoutes {


  static get routes(): Router {

    const router = Router();

    const datasource = new AuthDataSourceImpl(); //6
    const AuthRepository = new AuthRepositoryImpl(datasource); //7
    const controller = new AuthController(AuthRepository); // 2 // 8 actulizacion

    /**

Post track
@openapi
/api/auth/login:
post:
tags:
users
summary: "Login"
description: Esta ruta permite logearse
requestBody:
content:
application/json:
responses:
'200':
description: Retorna un mensaje de aprobacion
*/
    // Definir todas mis rutas especificas
    router.post('/login', controller.loginUser) // 3
    /**

Post track
@openapi
/api/auth/register:
post:
tags:
users
summary: "Register"
description: Esta ruta permite registrarse
requestBody:
content:
application/json:
schema:  
$ref: "#/components/schemas/user"
responses:
'200':
description: Retorna un mensaje de aprobacion
*/
    router.post('/register', controller.registerUser) // 4


    return router;
  }

}