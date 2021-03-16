<header>
    <nav class="navbar fixed-top navbar-dark bg-dark">
        <div class="container navbar_container">
            <a class="navbar-brand" href="{{ url('home') }}">AirB&B</a>
            <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  Account
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li><a class="dropdown-item" href="{{ url('register') }}">Register</a></li>
                  <li><a class="dropdown-item" href="{{ url('login') }}">LogIn</a></li>
                </ul>
              </div>
        </div>
    </nav>
</header>
