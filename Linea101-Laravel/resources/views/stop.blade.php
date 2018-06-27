<!DOCTYPE HTML>
<html>
	<head>
		<link href="../css/app.css" rel="stylesheet">
		<link href="../css/main.css" rel="stylesheet">
		<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
		<script src="../js/app.js"></script>
        <script src="../js/stop.js"></script>	
		<script src="../js/branch.js"></script>	
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
	
		<div  id="appStop">
			<div id="Titulo">
				<h1 class="VerRecorrido">Ramal @{{branch.name}}</h1>
				<button type="button" class="btn btn-success" id="VerRecorridoBoton" data-toggle="modal" data-target="#VerRecorrido" v-on:click="updateMarkers(branch.stops)">Ver recorrido</button>
				<button type="button" class="btn btn-primary" id="NuevaParada" data-toggle="modal" data-target="#NewStop">Agregar</button>
			</div>
			
			<table class="table table-hover">
				<thead class="thead-dark">
					<tr>
						<th scope="col">#</th>
						<th scope="col">Nombre</th>
						<th scope="col">Orden</th>
                        <th scope="col">Latitud</th>
                        <th scope="col">Longitud</th>
						<th scope="col">Acción</th>
					</tr>
				</thead>
				<tr  v-for="stop in branch.stops">
					<td>
						@{{ stop.id }}
					</td>
					<td>
						@{{ stop.name }}
					</td>
					<td >
						@{{ stop.order }}
                    </td>
                    <td >
						@{{ stop.latitude }}
                    </td>
                    <td >
                        @{{ stop.longitude }}
                    </td>
					<td>
						<div class="btn-group btn-group-toggle" data-toggle="buttons">
							<button type="button" class="btn btn-success" data-toggle="modal" data-target="#ModifyStop" v-on:click="fillModifyModal(stop)">Modificar</button>
							<button type="button" class="btn btn-danger" v-on:click="deleteStop(stop)">Borrar</button>
						</div>
					</td>
				</tr>
				
			</table>

			<div class="form-group">
				<div class="map3" id="map3"></div>
			</div>

			<div id="NewStop" class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
				<div class="modal-dialog">
					<div class="modal-content">
						<div class="modal-header">
							<h4 class="modal-title">Nueva parada</h4>
							<button type="button" class="close" data-dismiss="modal">&times;</button>
						</div>
						<div class="modal-body">
							<div class="form-group">
								<label>Nombre:</label>
								<input class="form-control" id="form-control" placeholder="Ingrese el nombre de la nueva parada" v-model="stopToCreate.name">
							</div>
                            <div class="form-group">
								<label>Orden:</label>
                                <input class="form-control" id="form-control" v-model="stopToCreate.order">
                            </div>
                            <!-- <div class="form-group">
								<label>Latitud:</label>
                                <input class="form-control" id="form-control" v-model="stopToCreate.latitude" disabled>
                            </div>
                            <div class="form-group">
								<label>Longitud:</label>
                                <input class="form-control" id="form-control" v-model="stopToCreate.longitude" disabled>
							</div> -->
							<div class="form-row">
								<div class="col">
									<label>Latitud:</label>
									<input class="form-control" id="form-control" v-model="stopToCreate.latitude" disabled>
								</div>
								<div class="col">
									<label>Longitud:</label>
									<input class="form-control" id="form-control" v-model="stopToCreate.longitude" disabled>
								</div>
							</div>
							<div class="form-group">
								<div class="map" id="map"></div>
							</div>
						</div>
						<div class="modal-footer">
							<button type="button" class="btn btn-danger" data-dismiss="modal">Cerrar</button>
							<button type="button" class="btn btn-success" data-dismiss="modal" v-on:click="addStop(stopToCreate)">Guardar</button>
						</div>
					</div>
				</div>
			</div>

			<div id="ModifyStop" class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
				<div class="modal-dialog">
					<div class="modal-content">
						<div class="modal-header">
							<h4 class="modal-title">Modificar parada</h4>
							<button type="button" class="close" data-dismiss="modal">&times;</button>
						</div>
						<div class="modal-body">
							<div class="form-group">
								<label>Nombre:</label>
								<input class="form-control" id="form-control" placeholder="Ingrese el nombre de la nueva parada" v-model="modStop.name">
							</div>
                            <div class="form-group">
								<label>Orden:</label>
                                <input class="form-control" id="form-control" v-model="modStop.order">
                            </div>
                            <div class="form-group">
								<label>Latitud:</label>
                                <input class="form-control" id="form-control" v-model="modStop.latitude" disabled>
                            </div>
                            <div class="form-group">
								<label>Longitud:</label>
                                <input class="form-control" id="form-control" v-model="modStop.longitude" disabled>
							</div>
							<div class="form-group">
								<div class="map" id="map2"></div>
							</div>
						</div>
						<div class="modal-footer">
							<button type="button" class="btn btn-danger" data-dismiss="modal">Cerrar</button>
							<button type="button" class="btn btn-success" data-dismiss="modal" v-on:click="modifyStop(modStop)">Guardar</button>
						</div>
					</div>
				</div>
			</div>

			<!-- <div id="VerRecorrido" class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
				<div class="modal-dialog modal-lg">
					<div class="modal-content">
						<div class="modal-header">
							<h4 class="modal-title">Recorrido</h4>
							<button type="button" class="close" data-dismiss="modal">&times;</button>
						</div>
						<div class="modal-body">
							
						</div>
					</div>
				</div>
			</div> -->
		</div>

	</main>
	<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAdyWuPQ0j6ebZ1gewB03l857nR0WOaUQc&callback=appStop"></script>
		
	</body>


</html>