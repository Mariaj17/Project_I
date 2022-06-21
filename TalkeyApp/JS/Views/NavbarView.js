import * as User from "../Models/UserModel.js"

function navbarView() {
    User.init();

    // CONSTRUÇÃO DO CONTÉUDO DA NAVBAR
    // NAVBAR POR DEFAULT = SEM AUTENTIFICAÇÃO
    let navbar = `<img src="/Media/images/Logo.svg" alt="logo" class="logo">
    <!-- Navigation area Área de navegação -->
    <div class="select-link"></div>
    <!-- NAVBAR SEM AUTENTIFICAÇÃO -->
    <nav class="navbar">
        <ul class="navbar-list">
          <div class="home-link"></div>
            <li class="navbar-link"><a class="home" href="/HTML/Index.html">HOME</a></li>
            <li class="navbar-link"><a  class="opacity-link" href="#">AULAS</a></li>
            <li class="navbar-link"><a id="rotate-shop" class="opacity-link"href="#">LOJA</a></li>
            <li class="navbar-link"><a  class="opacity-link"href="#">PERFIL</a></li>
            <div class="autentification-links">
            <li class="navbar-link"><a class="login-btn" href="/HTML/Login.html"><span>INICIAR SESSÃO</span></a></li>
            <li class="navbar-link"><a  class="register-btn" href="/HTML/Register.html"><span>CRIAR CONTA</span></a></li>
          </div>
            <!-- <li class="toggle"><a href="#"><span class="bars"></span></a></li> -->
        </ul> 
    </nav>`;
    
    // VERSÃO NAVBAR COM USER AUTENTIFICADO
      if(User.isLogged()){
        navbar = `<img src="/Media/images/Logo.svg" id="logov02" alt="logo" class="logov02">
        <!-- Navigation area Área de navegação -->
        <div class="select-linkv02"></div>
        <!-- NAVBAR COM AUTENTIFICAÇÃO -->
        <nav class="navbarv02">
            <ul class="navbar-listv02">
              <div class="home-linkv02"></div>
                <li class="navbar-linkv02"><a class="homev02" href="/HTML/Index.html">HOME</a></li>
                <li class="navbar-linkv02"><a id="rotate-aulas" class="opacity-linkv02" href="/HTML/Niveis.html">AULAS</a></li>
                <li class="navbar-linkv02"><a  class="opacity-linkv02"href="/HTML/Shop.html">LOJA</a></li>
                <li class="navbar-linkv02"><a  class="opacity-linkv02"href="/HTML/Perfil.html">PERFIL</a></li>
                  <!-- LOGOUT BUTTON -->
                  <li class="logout-link"><a class="buttonHome" href="/HTML/Index.html"><span class="iconify" data-icon="material-symbols:exit-to-app"></span></a></li>
            </ul> 
        </nav>
      <!-- LINKS RESPONSIVOS -->
      <div class="responsive-links">
      <a href="/HTML/Index.html"><img class="homeres" height="40px" src="/Media/images/select-home-responsive.svg" alt="#"></a>
      <a href="/HTML/Niveis.html"><img class="shopres" height="40px" src="/Media/images/lesson-responsive-icon.svg" alt="#"></a>
      <a href="/HTML/Shop.html"><img class="lessonres"  height="40px" src="/Media/images/loja-icon-mobile.svg" alt="#"></a>
      <a href="/HTML/Perfil.html"><img class="perfilres" height="40px" src="/Media/images/Perfil-icon-mobile.svg" alt="#"></a>
      </div>`
      }

    navbar += `</div>`
    

//CONTÉUDO NA NAVBAR
document.querySelector(".header").innerHTML = navbar;


  //PARA O BOTÃO LOGOUT [<=]
  document.querySelector(".buttonHome")?.addEventListener('click',()=>{
    User.logout();
    location.reload();
  });
  
} 


navbarView()
