class Usuario {
    constructor(nome, email) {
        this.nome = nome;
        this.email = email;
    }
}

class UsuarioLogger {
    log(usuario) {
        console.log(`LOG: Usuário ${usuario.nome} (${usuario.email}) processado.`);
    }
}

const user = new Usuario("Carlos", "carlos@email.com");
const logger = new UsuarioLogger();

logger.log(user);