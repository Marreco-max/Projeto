// Sistema de autenticação e redirecionamento
function initAuthentication() {
    const loginForm = document.getElementById('loginForm');
    if (!loginForm) return;

    const usuarios = [
        { usuario: 'estud', senha: '1234', tipo: 'estudante', pagina: 'home.html' },
        { usuario: 'prof', senha: '1234', tipo: 'professor', pagina: 'prof.html' },
        { usuario: 'admin', senha: '1234', tipo: 'administrador', pagina: 'admin.html' }
    ];

    loginForm.onsubmit = function(e) {
        e.preventDefault();
        const user = document.getElementById('username').value.trim();
        const pass = document.getElementById('password').value;

        const usuarioValido = usuarios.find(u => u.usuario === user && u.senha === pass);

        if (usuarioValido) {
            // Armazenar dados do usuário no localStorage
            localStorage.setItem('usuarioLogado', JSON.stringify({
                usuario: usuarioValido.usuario,
                tipo: usuarioValido.tipo,
                dataLogin: new Date().toISOString()
            }));
            
            // Redirecionar para a página específica
            window.location.href = usuarioValido.pagina;
        } else {
            document.getElementById('loginError').style.display = 'block';
            document.getElementById('password').value = '';
        }
    };
}

function exibir(id) {
  const paineis = document.querySelectorAll('.painel');
  paineis.forEach(painel => painel.style.display = 'none');

  const selecionado = document.getElementById(id);
  if (selecionado) {
    selecionado.style.display = 'block';
  }
}

document.addEventListener('DOMContentLoaded', () => {
    const openBtn = document.getElementById('openSidebar');
    const closeBtn = document.getElementById('closeSidebar');
    const sidebar = document.getElementById('sidebar');
    const links = document.querySelectorAll('#sidebar a[data-target]');
    const sections = document.querySelectorAll('.content');


    openBtn.addEventListener('click', (e) => {
        e.preventDefault();
        sidebar.classList.add('open');
    });

    closeBtn.addEventListener('click', () => {
        sidebar.classList.remove('open');
    });


    // Helper: show a section. If it's 'inicio', show container but
    // hide its children except the .caixas which will be display:flex
    function showSection(target) {
        sections.forEach(sec => sec.style.display = 'none');
        const el = document.getElementById(target);
        if (!el) return;

        if (target === 'inicio') {
            // show the container
            el.style.display = 'block';
            // for each child of #inicio: show .caixas as flex, also show H1 and P; hide others
            Array.from(el.children).forEach(child => {
                const isCaixas = child.classList && child.classList.contains('caixas');
                const isHeading = child.tagName === 'H1' || child.tagName === 'P';
                if (isCaixas) {
                    child.style.display = 'flex';
                } else if (isHeading) {
                    // keep headings/paragraphs visible using default block display
                    child.style.display = '';
                } else {
                    child.style.display = 'none';
                }
            });
        } else {
            // non-inicio sections: show normally
            el.style.display = 'block';
            // ensure #inicio and its caixas are hidden
            const inicio = document.getElementById('inicio');
            if (inicio) {
                inicio.style.display = 'none';
                const caixas = inicio.querySelector('.caixas');
                if (caixas) caixas.style.display = 'none';
                // reset other children of inicio to default (no display inline style)
                Array.from(inicio.children).forEach(child => {
                    if (!(child.classList && child.classList.contains('caixas'))) {
                        child.style.display = '';
                    }
                });
            }
        }
    }

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = link.getAttribute('data-target');
            showSection(target);
            sidebar.classList.remove('open');
        });
    });

    // initial state: hide all sections then show inicio with only .caixas visible
    sections.forEach(sec => sec.style.display = 'none');
    showSection('inicio');
});

function createCalendar(year, month) {
      let divCalendar = document.getElementById("calendar");


      let months = [
        "Janeiro","Fevereiro","Março","Abril","Maio","Junho",
        "Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"
      ];


      let date = new Date(year, month);
      let table = "<h2>" + months[month] + " " + year + "</h2>";
      table += "<table><tr><th>Dom</th><th>Seg</th><th>Ter</th><th>Qua</th><th>Qui</th><th>Sex</th><th>Sáb</th></tr><tr>";


      for (let i = 0; i < date.getDay(); i++) {
        table += "<td></td>";
      }


      while (date.getMonth() === month) {
        let today = new Date();
        let classToday = (date.getDate() === today.getDate() &&
                          date.getMonth() === today.getMonth() &&
                          date.getFullYear() === today.getFullYear()) ? "today" : "";

        table += `<td class="${classToday}">${date.getDate()}</td>`;

        if (date.getDay() === 6) {
          table += "</tr><tr>";
        }

        date.setDate(date.getDate() + 1);
      }

      table += "</tr></table>";
      divCalendar.innerHTML = table;
    }


    let today = new Date();
    createCalendar(today.getFullYear(), today.getMonth());

    // Inicializar autenticação se estiver na página de login
    initAuthentication();


function mostrarEspera() {
    document.querySelectorAll('.content').forEach(function(div) {
        div.style.display = 'none';
    });
    document.getElementById('espera').style.display = 'block';
}

function mostrarEspera1() {
    document.querySelectorAll('.content').forEach(function(div) {
        div.style.display = 'none';
    });
    document.getElementById('espera1').style.display = 'block';
}

 const input = document.getElementById("fileInput");
    const fileName = document.getElementById("fileName");

    input.addEventListener("change", () => {
      fileName.textContent = input.files.length > 0
        ? "Arquivo selecionado: " + input.files[0].name
        : "";
    });