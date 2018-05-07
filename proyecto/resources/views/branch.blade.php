<!DOCTYPE HTML>
<html>
	<head>
		<link href="../css/app.css" rel="stylesheet">
		<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
		<script src="../js/app.js"></script>
		<script src="../js/branch.js"></script>		
	</head>

	<body>

	<header>

			<nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
				<a class="navbar-brand" href="branch">Linea 101</a>
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
	
		<div  id="appBranch">
			<table class="table table-hover">
				<thead class="thead-dark">
					<tr>
						<th scope="col">#</th>
						<th scope="col">Ramal</th>
						<th scope="col">Acción</th>
					</tr>
				</thead>
				<tr  v-for="branch in branches">
					<td>
						@{{ branch.id }}
					</td>
					<td >
						@{{ branch.name }}
					</td>
					<td>
						<div class="btn-group btn-group-toggle" data-toggle="buttons">
							<button type="button" class="btn btn-success" data-toggle="modal" data-target="#ModifyBranch" v-on:click="fillModifyModal(branch)">Modificar</button>
							<button type="button" class="btn btn-danger" v-on:click="deleteBranch(branch)">Borrar</button>
						</div>
						
							<a v-bind:href="'{{ url('/stop') }}?id=' + branch.id"><button type="button" class="btn btn-warning">Paradas</button></a>
						
					</td>
				</tr>
				
			</table>
			
			<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#NewBranch">Agregar</button>

			<div id="NewBranch" class="modal fade" role="dialog">
				<div class="modal-dialog">
					<div class="modal-content">
						<div class="modal-header">
							<h4 class="modal-title">Nuevo ramal</h4>
							<button type="button" class="close" data-dismiss="modal">&times;</button>
						</div>
						<div class="modal-body">
							<input class="form-control" placeholder="Ingrese el nombre del ramal" v-model="newBranch.name">
						</div>
						<div class="modal-footer">
							<button type="button" class="btn btn-danger" data-dismiss="modal">Cerrar</button>
							<button type="button" class="btn btn-success" data-dismiss="modal" v-on:click="addBranch(newBranch)">Guardar</button>
						</div>
					</div>
				</div>
			</div>

			<div id="ModifyBranch" class="modal fade" role="dialog">
				<div class="modal-dialog">
					<div class="modal-content">
						<div class="modal-header">
							<h4 class="modal-title">Modificar ramal</h4>
							<button type="button" class="close" data-dismiss="modal">&times;</button>
						</div>
						<div class="modal-body">
							<input class="form-control" v-model="modBranch.name">
						</div>
						<div class="modal-footer">
							<button type="button" class="btn btn-danger" data-dismiss="modal">Cerrar</button>
							<button type="button" class="btn btn-success" data-dismiss="modal" v-on:click="modifyBranch(modBranch.id, modBranch.name)">Guardar</button>
						</div>
					</div>
				</div>
			</div>

		</div>

	</main>
		
	</body>


</html>