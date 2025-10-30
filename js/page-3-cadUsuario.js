
        // Mapeamento de IDs
        const form = document.getElementById('cadastroForm');
        const submitButton = document.getElementById('submitButton');
        const aceiteTermos = document.getElementById('aceite_termos');
        const emailInput = document.getElementById('email');

        // FUNÇÕES DE MASCARAMENTO (Para melhor UX)
        function maskCPF(value) {
            value = value.replace(/\D/g, "")
            value = value.replace(/(\d{3})(\d)/, "$1.$2")
            value = value.replace(/(\d{3})(\d)/, "$1.$2")
            value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2")
            return value;
        }
        function maskPhone(value) {
            value = value.replace(/\D/g, "")
            value = value.replace(/^(\d{2})(\d)/g, "($1) $2")
            value = value.replace(/(\d)(\d{4})$/, "$1-$2")
            return value;
        }

        // Adiciona listeners para formatação e validação
        document.getElementById('cpf').addEventListener('input', (e) => {
            e.target.value = maskCPF(e.target.value);
            validateInputs();
        });

        document.getElementById('telefone').addEventListener('input', (e) => {
            e.target.value = maskPhone(e.target.value);
            validateInputs();
        });

        aceiteTermos.addEventListener('change', validateInputs);
        form.querySelectorAll('input, select, textarea').forEach(input => {
            input.addEventListener('input', validateInputs);
        });

        // FUNÇÃO DE VALIDAÇÃO GERAL
        function validateInputs() {
            let isValid = true;

            // 1. Validação de campos obrigatórios
            form.querySelectorAll('[required]').forEach(input => {
                if (input.value.trim() === '' || (input.type === 'checkbox' && !input.checked)) {
                    isValid = false;
                    input.classList.add('input-error');
                } else {
                    input.classList.remove('input-error');
                }
            });

            // 2. Validação de Email básica (simulação)
            if (emailInput.value && !emailInput.value.includes('@') && !emailInput.value.includes('.')) {
                 isValid = false;
                 emailInput.classList.add('input-error');
            }

            // Habilita/Desabilita o botão
            submitButton.disabled = !isValid;
        }

        // FUNÇÃO DE SUBMISSÃO
        function handleCadastro(event) {
            event.preventDefault(); // Impede o envio tradicional do formulário

            // Se o botão estiver habilitado, a validação client-side passou.
            if (submitButton.disabled) {
                console.error("Formulário inválido.");
                return;
            }

            const messageBox = document.getElementById('message-box');
            messageBox.classList.remove('hidden', 'bg-red-100', 'text-red-700');
            messageBox.classList.add('bg-green-100', 'text-green-700');
            messageBox.textContent = 'Inscrição processada com sucesso! Redirecionando para a confirmação...';

            console.log("Dados coletados, simulando envio ao servidor...");
            // Simula o delay de uma requisição de rede
            setTimeout(() => {
                // Redireciona para a próxima página do fluxo (Página 4)
                window.location.href = 'page-4-validacao.html';
            }, 1500);
        }

        // Inicializa a validação ao carregar a página
        window.onload = validateInputs;