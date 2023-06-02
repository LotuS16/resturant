// class NavBar extends HTMLElement{
//     constructor(){
//         super();
//         this.shadowDOM = this.attachShadow({mode:"open"});
//     }

//     connectedCallback(){
//       this.render();

//       const hamburger = document.querySelector(".hamburger");
//       const navMenu = document.querySelector(".nav-menu");

//       hamburger.addEventListener("click",() => {
//         hamburger.classList.toggle("active");
//         navMenu.classList.toggle("active");
//       });

//       document.querySelectorAll("nav-link").forEach((n) => n.
//         addEventListener("click", ()=>{
//       hamburger.classList.remove("active");
//       navMenu.classList.remove("active");
//       }));
//     }
//     render(){
//         this.shadowDOM.innerHTML = `
//         <style>
//         *{
//           padding: 0;
//           margin: 0;
//           box-sizing: border-box;
//         }
    
//         header{
//           background-color: #222;
//         }
    
//         li{
//           list-style: none;
//         }
    
//         a{
//           color: white;
//           text-decoration: none;
//         }
    
//         .navbar{
//           min-height: 70px;
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           padding: 0 24px;
//         }
    
//         .nav-menu{
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           gap: 60px;
//         }
    
//         .nav-branding{
//           font-size: 2rem;
//         }
    
//         .nav-link{
//           transition: 0.1s ease;
//         }
    
//         .nav-link:hover{
//           color:dodgerblue;
//         }
    
//         .hamburger{
//           display: block;
//           cursor: pointer;
//         }
    
//         .bar{
//           display: block;
//           width: 25px;
//           height: 3px;
//           margin: 5px;
//           transition: all 0.3s ease-in-out;
//           background-color: white;
//         }
    
//         /* Media query untuk layar dengan lebar 600px atau kurang */
//         @media screen and(min-width:600px){
//           .hamburger{
//             display: none;
//           }
    
//           .hamburger.active .bar:nth-child(2){
//             opacity: 0;
//           }
    
//           .hamburger.active .bar:nth-child(1){
//             transform: translateY(8px) rotate(45deg);
//           }
    
//           .hamburger.active .bar:nth-child(3){
//             transform: translateY(-8px) rotate(-45deg);
//           }
    
//           .nav-menu{
//             position: fixed;
//             left:-100%;
//             top: 70px;
//             gap: 0;
//             flex-direction: column;
//             background-color: #222;
//             width: 100%;
//             transition: 0.3s;
//           }
    
//           .nav-item{
//             margin: 16px 0;
//           }
    
//           .nav-menu.active{
//             left: 0;
//           }
//         }
//       </style>
//       <header>
//         <nav class="navbar">
//           <a href="#" class="nav-branding">Restaurant</a>
//           <ul class="nav-menu">
//             <li class="nav-list">
//               <a href="index.html" class="nav-link">home</a>
//             </li>
//             <li class="nav-list">
//               <a href="#" class="nav-link">favorite</a>
//             </li>
//             <li class="nav-list">
//               <a href="https://github.com/LotuS16" class="nav-link">about us</a>
//             </li>
//           </ul>
//           <div class="hamburger">
//             <span class="bar"></span>
//             <span class="bar"></span>
//             <span class="bar"></span>
//           </div>
//         </nav>
//       </header>
//     </body>
//         `;
//     }
// }

// customElements.define("nav-bar", NavBar);