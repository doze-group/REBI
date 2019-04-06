<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>

<head>
  <link rel="icon"
    href="http://aulavirtual.tecnologicocomfenalcovirtual.edu.co/ferrum/theme/image.php/adaptable/theme/1552317524/favicon" />
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <% String title = "REBI-TC";%>
  <title><%=title%></title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.4/css/bulma.min.css" />
  <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
</head>

<body class="Todo">
  <div id="root" class="Todo"></div>
  <script src="libraries/react16.8.1.min.js"></script>
  <script src="libraries/react16.8.1-dom.min.js"></script>
  <script src="libraries/react4.3.0-router-dom.js"></script>
  <script charset="utf-8" src="libraries/babel6.26.0.min.js"></script>

  <!-- Styles -->
  <style>
    @import './React/styles.css';
    @import './React/Components/Home/Home.css';
    @import './React/Components/NavBar/NavBar.css';
  </style>
  <link rel="stylesheet" href="./React/styles.css" />
  <link rel="stylesheet" href="./React/Components/Home/Home.css" />
  <!-- Components -->
  <script src="React/Components/Home/Home.js" type="text/babel"></script>
  <!--<script src="React/Components/NavBar/NavBar.js" type="text/babel"></script>-->
  <!-- <script src="React/Components/ProductCreate/ProductCreate.js" type="text/babel"></script> -->

  <script src="React/App.js" type="text/babel"></script>
  <script src="React/Index.js" type="text/babel"></script>

</body>

</html>