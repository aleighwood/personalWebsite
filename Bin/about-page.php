<!DOCTYPE html>
<html>

<head>
  <title>About Page</title>

  <link rel="stylesheet" href="Styles/general.css">
  <link rel="stylesheet" href="Styles/aboutme.css">



  <?php
  include("modularContent/sidebar_head.php")
  ?>

</head>

<body>

  <?php
  include("modularContent/sidebar.php")
  ?>

  <div class="RHS-content">
    <div class="aboutme-container">
      <div class="header-section">
        <div class="header-frame">
          <div class="name"> Arthur Leigh-Wood</div>
          <div class="occupation"> Electronic and Electrical engineering student in London</div>
        </div>
        <div class="img-frame">
          <img src="Images/profile-pic.png">
        </div>
      </div>
      <div class="toggles">
        <button class="about-me-button js-short-button" onclick="changeLength('short');"> Short </button>
        <button class="about-me-button js-long-button" onclick="changeLength('long');"> Long</button>
      </div>
      <div class="bio-text js-bio-text">
      </div>
    </div>
  </div>

  <script src="about.js"></script>

</body>

</html>