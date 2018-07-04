<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <!DOCTYPE HTML>
<html>
	<head>
        <link href="../css/app.css" rel="stylesheet">
        <link href="../css/main.css" rel="stylesheet">
		<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
		<script src="../js/app.js"></script>
        <script src="../js/welcome.js"></script>		
	</head>

	<body>

        <header>

            <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
                <a class="navbar-brand" href="welcome">Linea 101</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="branch">Ramales</a>
                        </li>
                    </ul>
                    <ul class="navbar-nav ml-auto">
                        @guest
                            <li><a class="nav-link" href="{{ route('login') }}">{{ __('Login') }}</a></li>
                            <li><a class="nav-link" href="{{ route('register') }}">{{ __('Registrar') }}</a></li>
                        @else
                            <li class="nav-item dropdown">
                                <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                                    {{ Auth::user()->name }} <span class="caret"></span>
                                </a>

                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="{{ route('logout') }}"
                                        onclick="event.preventDefault();
                                                        document.getElementById('logout-form').submit();">
                                        {{ __('Salir') }}
                                    </a>

                                    <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                        @csrf
                                    </form>
                                </div>
                            </li>
                        @endguest
                    </ul>
                </div>
            </nav>
                
        </header>
        
        <main>
            
            <div>

                <div class="content">
                    <div class="title m-b-md">
                        <h1 class="VerRecorrido">Linea 101</h1>
                    </div>
    
                    <div class="links VerRecorrido">
                        <a class="VerRecorrido" href="branch">Ramales</a>
                    </div>
                </div>

                <div id="welcomeApp" class="container">
                    <div style="margin-top: 30px">
                        <div class="form-group">
                            <label for="branchsList">
                                <h3 class="text text-center">Listado de Ramales</h3>
                            </label>
                            
                            <div>
                                <span v-for="branch in branches">
                                    <label>
                                        @{{ branch.name }}
                                        <div :data-id="branch.id" class="color-box"></div>
                                    </label>
                                </span>
                            </div>

                        </div>

                        <div>
                            <!--<Google Maps>--> 
                            <div class="form-group">
                                <div class="map" id="map"></div>
                            </div>
                            
                        </div>
                    </div>  
                </div>
                
            </div>

        </main>
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAdyWuPQ0j6ebZ1gewB03l857nR0WOaUQc&callback=welcomeApp"></script>
    </body>

</html>
