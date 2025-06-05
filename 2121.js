document.addEventListener('DOMContentLoaded', () => {
    console.log('Página carregada com sucesso!');

    const openBtn = document.getElementById('openSidebar');
    const closeBtn = document.getElementById('closeSidebar');
    const sidebar = document.getElementById('sidebar');

    openBtn.addEventListener('click', (e) => {
        e.preventDefault();
        sidebar.classList.add('open');
    });

    closeBtn.addEventListener('click', () => {
        sidebar.classList.remove('open');
    });
});

function exibir(id) {
  const paineis = document.querySelectorAll('.painel');
  paineis.forEach(painel => painel.style.display = 'none');

  const selecionado = document.getElementById(id);
  if (selecionado) {
    selecionado.style.display = 'block';
  }
}
