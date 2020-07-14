<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Luis Briceño</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
         <!-- CSRF Token -->
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <!--<title>{{ config('app.name', 'Luis-briceño') }}</title>-->

        <!-- Scripts -->
        <script src="{{ asset('js/app.js') }}" defer></script>

        <!-- Fonts -->
        <link rel="dns-prefetch" href="//fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

        <!-- Styles -->
       <link href="{{ asset('css/app.css') }}" rel="stylesheet">
        
        <!--<script src="{{ secure_asset('js/app.js') }}" defer></script>-->

        <!--<link href="{{ secure_asset('css/app.css') }}" rel="stylesheet">-->
        
        <style type="text/css">
            html, body{
              height:100%;
              margin:0;
              display: flex;
              flex-direction: column;
            }
        </style>
    </head>
    <body>
        <div id="app"  style="height:100%;">
           @yield('content')
        </div>
    </body>
</html>
