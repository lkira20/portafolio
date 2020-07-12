@extends('layouts.app')

@section('content')
	<div class="card">
		<div class="card-header">
			<div class="card-title">Mensaje de tu portafolio</div>
		</div>
		<div class="card-body">
			<p class="card-text">
				nombre: {{$nombre}}
			</p>
			<p class="card-text">
				correo: {{$email}}
			</p>
			<p class="card-text">
				{{$mensaje}}
			</p>
		</div>
	</div>
@endsection