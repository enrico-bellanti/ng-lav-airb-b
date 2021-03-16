<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="{{asset('css/app.css')}}">
    <title>@yield('title', 'AirB&B')</title>
</head>
<body>

    @include('layouts.header')
    <main>

      <div class="container main-container">
        @yield('mainContent')
      </div>

    </main>
    @include('layouts.footer')
  
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js"></script>
  <script src="{{asset('js/app.js')}}"></script>
</body>
</html>