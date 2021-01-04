let modulousuario = require('./usuario.js')

let process = require ('process');
const moduloUsuarios = require('./usuario.js');
let comando = process.argv[2];

switch (comando) {
    case 'registro' :
        let nombre = process.argv[3]
        let email = process.argv[4]
        let password = process.argv[5]
        

        modulousuario.registro(nombre, email, password)

        console.log('usuario registrado');
        break;
case 'login' :
    let emaillogin = process.argv[3]
    let passwordlogin = process.argv[4]
    
    let usuariologin = modulousuario.login(emaillogin, passwordlogin)
    if (usuariologin == undefined) {
        console.log('credenciales invalidas');
    } else {
        console.log('bienvenido, ' + usuariologin.nombre);
    }
        break;
        case 'eliminar':
            let emaileliminar = process.argv[3]
            let passwordeliminar = process.argv[4]

            let eliminado = moduloUsuarios.eliminar(emaileliminar, passwordeliminar);

            if (eliminado) {
                console.log('usuario eliminado ');
            }else {
                console.log('credenciales invalidas');
            }

}