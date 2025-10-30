document.addEventListener('DOMContentLoaded', () => {
                const params = new URLSearchParams(window.location.search);
                const categoria = params.get('categoria');
                const titleElement = document.getElementById('category-display');

                if (categoria && titleElement) {
                    // Remove a codificação URL (%20 vira espaço) e define o título
                    const nomeCategoria = decodeURIComponent(categoria);
                    titleElement.textContent = nomeCategoria;

                    // Opcional: Atualizar o <title> da página
                    document.title = `ESUDA Conecta | ${nomeCategoria}`;
                } else if (titleElement) {
                    // Se acessou diretamente sem parâmetro
                    titleElement.textContent = 'Todos os Eventos';
                }
            });