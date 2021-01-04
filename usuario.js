let fs = require('fs');

let moduloUsuarios = {
    archivoJSON: './usuario.json',

    leerJSON: function() {
        let usuarioJSON = fs.readFileSync(this.archivoJSON, 'utf-8');
        let usuario = JSON.parse(usuarioJSON);

        return usuario;
    },

    guardarJSON: function(info) {
        let usuariosActualizados = JSON.stringify(info);
        fs.writeFileSync(this.archivoJSON, usuariosActualizados, 'utf-8');
    },

    registro : function (nombre, email, password) {
        let usuario = this.leerJSON();

        let nuevousuario = {
            nombre: nombre,
            email : email,
            password : password,
        }
    usuario.push(nuevousuario);

    this.guardarJSON(usuario)
    },

    login : function (email, password) {
        let usuario = this.leerJSON();

        let usuariologin;

        usuario.forEach(function (usuario) {
         if (usuario.email == email && usuario.password == password) {
             usuariologin = usuario


         }   
        })

        return usuariologin ;
    },
     eliminar : function (email, password) {
         let usuario = this.leerJSON();
let usuariosactualizados = [] ;
let eliminado = false;


         //let usuariosactualizados = usuario.filter(function (usuario) {
           //  return usuario.email != email || usuario.password != password
         //})


usuario.forEach(function (usuario) {
    if (usuario.email != email && usuario.password != password) {
        eliminado = true;
    }else {
        usuariosactualizados.push(usuario);
    }
})
         this.guardarJSON(usuariosactualizados);

         //return usuariosactualizados.length == usuario.length ? false : true
 return eliminado ;       
        
        }
}

module.exports = moduloUsuarios
