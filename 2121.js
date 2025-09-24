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


    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = link.getAttribute('data-target');

            sections.forEach(sec => sec.style.display = 'none');
            document.getElementById(target).style.display = 'block'; 

            sidebar.classList.remove('open');
        });
    });


    sections.forEach(sec => sec.style.display = 'none');
    document.getElementById('inicio').style.display = 'block';
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

   document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        const usuarios = [
            { usuario: 'admin', senha: '1234' },
            { usuario: '20250122', senha: '5678' },
            { usuario: '20250133', senha: '9101' }
        ];

        loginForm.onsubmit = function(e) {
            e.preventDefault();
            var user = document.getElementById('username').value;
            var pass = document.getElementById('password').value;

            const valido = usuarios.some(u => u.usuario === user && u.senha === pass);

            if(valido) {
                document.getElementById('loginModal').style.display = 'none';
                document.getElementById('loginError').style.display = 'none';
            } else {
                document.getElementById('loginError').style.display = 'block';
            }
        };
    }
}); 


function mostrarEspera() {
    document.querySelectorAll('.content').forEach(function(div) {
        div.style.display = 'none';
    });
    document.getElementById('espera').style.display = 'block';
}
