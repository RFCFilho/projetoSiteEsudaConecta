function simulaLogin() {
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value.trim();

    // Dados mocados
    const emailValido = "eventos@esuda.br";
    const senhaValida = "Eventos123";

    if (email === emailValido && senha === senhaValida) {        
        window.location.href = "html/admin_admins.html";
    } else {
        alert("Login inválido. Verifique o e-mail e a senha.");
    }

    return false; // impede envio real do formulário
}