class NavBar extends HTMLElement{
    constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode:"open"});
    }

    conntedCallback(){
        this.render();
    }

    render(){
        this.shadowDOM.innerHTML = `
        <style>
  *, html, body{
    margin: 0;
    padding: 0;
  }

  .FContainer{
    display: flex;
    width: 100%;
    height: 100vh;
    background-color: rgb(255, 255, 255);
  }

  .wrapper{
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 20px;
    padding: 15px;
    width: 100%;
    height: 40px;
    background-color: #222;
    box-shadow: 0 7px 15px 0 rgba(0, 0, 0, 0.5);
  }

  h1{
    color: white;
  }

  .nav_list{
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .nav_list > li{
    list-style-type: none;
    padding: 15px;
  }

  .nav_list>li>a{
    color: white;
    font-size: 20px;
    text-decoration: none;
    text-transform: capitalize;
  }

  .nav_list>li>a:hover{
    color: rgb(92, 27, 132);
    transition: all .1s ease-in-out;
  }

  .active>:hover{
    color: white !important;
  }

  .active{
    
    color:white;
    padding: 15px;
  }
</style>
<body>
 <div class="FContainer">
  <nav class="wrapper">
    <div class="brand">
      <h1>Restaurant</h1>
    </div>
    <ul class="nav_list">
      <li class="home"><a href="http://localhost:9001/">home</a></li>
      <li class="favorite"><a href="#" class="active">favorite</a></li>
      <li class="aboutUs"><a href="https://github.com/LotuS16">about us</a></li>
    </ul>
  </nav>
  </div>
        `;
    }
}

customElements.define("nav-bar", NavBar);