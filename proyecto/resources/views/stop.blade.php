<!DOCTYPE HTML>
<html>
	<head>
		<link href="../css/app.css" rel="stylesheet">
		<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
		<script src="../js/app.js"></script>
        <script src="../js/stop.js"></script>	
		<script src="../js/branch.js"></script>	
		<style>
		.map{
			width: 465px;
			height: 400px;
			display: block;
			border-radius: 5px;
		}
		</style>
	</head>

	<body>

	<header>

			<nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
				<a class="navbar-brand" href="#">Linea 101</a>
				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
			
				<div class="collapse navbar-collapse" id="navbarSupportedContent">
					<ul class="navbar-nav mr-auto">
						<li class="nav-item">
							<a class="nav-link" href="branch">Ramales</a>
						</li>
						<!-- <li class="nav-item dropdown">
							<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							Dropdown
							</a>
							<div class="dropdown-menu" aria-labelledby="navbarDropdown">
							<a class="dropdown-item" href="#">Action</a>
							<a class="dropdown-item" href="#">Another action</a>
							<div class="dropdown-divider"></div>
							<a class="dropdown-item" href="#">Something else here</a>
							</div>
						</li> -->
					</ul>
					<form class="form-inline my-2 my-lg-0">
					<input class="form-control mr-sm-2" type="search" placeholder="Buscar" aria-label="Search">
					<button class="btn btn-success my-2 my-sm-0" type="submit">Buscar</button>
					</form>
				</div>
			</nav>
			
	</header>
	
	<main>
	
		<div  id="appStop">
			<table class="table table-hover">
				<thead class="thead-dark">
					<tr>
						<th scope="col">#</th>
						<th scope="col">Orden</th>
						<th scope="col">Nombre</th>
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
							<button type="button" class="btn btn-success">Modificar</button>
							<button type="button" class="btn btn-danger" v-on:click="deleteStop(Stop)">Borrar</button>
						</div>
						<button type="button" class="btn btn-warning">Paradas</button>
					</td>
				</tr>
				
			</table>
			
			<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#NewStop">Agregar</button>

			<div id="NewStop" class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
				<div class="modal-dialog">
					<div class="modal-content">
						<div class="modal-header">
							<h4 class="modal-title">Nueva parada</h4>
							<button type="button" class="close" data-dismiss="modal">&times;</button>
						</div>
						<div class="modal-body">
							<div class="form-group">
								<input class="form-control" id="form-control" placeholder="Ingrese el nombre de la nueva parada" v-model="stopToCreate.name">
							</div>
                            <div class="form-group">
                                <input class="form-control" id="form-control" v-model="stopToCreate.order">
                            </div>
                            <div class="form-group">
                                <input class="form-control" id="form-control" v-model="stopToCreate.latitude">
                            </div>
                            <div class="form-group">
                                <input class="form-control" id="form-control" v-model="stopToCreate.longitude">
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

		</div>

	</main>
	<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAdyWuPQ0j6ebZ1gewB03l857nR0WOaUQc&callback=appStop"></script>
		
	</body>


</html>