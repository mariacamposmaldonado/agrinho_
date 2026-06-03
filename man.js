// Aguarda o carregamento do documento
document.addEventListener("DOMContentLoaded", () => {
    
    // Seleciona todas as seções (tópicos) e os links do menu
    const sections = document.querySelectorAll(".topic");
    const navLinks = document.querySelectorAll("header nav ul li a");

    // Função para destacar o menu de acordo com a rolagem da página
    window.addEventListener("scroll", () => {
        let currentSectionId = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            // Verifica se a rolagem da tela está sobre a seção atual
            if (window.scrollY >= (sectionTop - 150)) {
                currentSectionId = section.getAttribute("id");
            }
        });

        // Remove a cor de destaque de todos os links e adiciona apenas no ativo
        navLinks.forEach(link => {
            link.style.color = ""; // Reseta para o padrão do CSS
            if (link.getAttribute("href") === `#${currentSectionId}`) {
                link.style.color = "#f39c12"; // Cor de destaque (Mel)
            }
        });
    });
});