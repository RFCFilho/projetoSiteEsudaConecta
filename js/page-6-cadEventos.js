function handleEventSubmit(event) {
            event.preventDefault();

            // Simula a coleta de dados do formulário
            const eventData = {
                titulo: document.getElementById('titulo').value,
                palestrante: document.getElementById('palestrante').value,
                id_tipo: document.getElementById('tipo_evento').value,
                descricao: document.getElementById('descricao').value,
                carga_horaria: document.getElementById('carga_horaria').value,
                local_realizacao: document.getElementById('local').value,
                valor: document.getElementById('valor').value,
                data_inscricoes_inicio: document.getElementById('inscricao_inicio').value,
                data_inscricoes_fim: document.getElementById('inscricao_fim').value,
                conteudo_programatico: document.getElementById('conteudo').value,
                // O id_admin logado seria adicionado aqui
            };

            const messageBox = document.getElementById('message-box');
            messageBox.classList.remove('hidden');

            // Simulação de sucesso
            messageBox.textContent = `Evento "${eventData.titulo}" cadastrado com sucesso! ID temporário: ${Math.floor(Math.random() * 1000)}.`;
            messageBox.classList.remove('bg-red-100', 'text-red-700');
            messageBox.classList.add('bg-green-100', 'text-green-700');

            // Limpa o formulário
            document.getElementById('event-form').reset();
            
            // Log do objeto para simular o envio ao servidor
            console.log("Dados do Evento a ser salvo:", eventData);
        }