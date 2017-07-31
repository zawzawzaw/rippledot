<?php 
  global $current_page;

  $current_page = "contact-us-page";
?>
<!doctype html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang=""> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8" lang=""> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9" lang=""> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang=""> <!--<![endif]-->
<head>
  <?php include 'head.php'; ?>
</head>

<body class="page-contact-us min-height-version min-height-mobile-version">
  <?php include "header.php"; ?>


  <!--
      ____ ___  _   _ _____ _____ _   _ _____
     / ___/ _ \| \ | |_   _| ____| \ | |_   _|
    | |  | | | |  \| | | | |  _| |  \| | | |
    | |__| |_| | |\  | | | | |___| |\  | | |
     \____\___/|_| \_| |_| |_____|_| \_| |_|

  -->

  <article id="page-contact-us-content-section" class="min-height-target min-height-target-mobile">

    <div class="desktop-header-spacer"></div>
    <div class="mobile-header-spacer"></div>

    <div id="page-contact-us-map-mobile-container" class="visible-sm visible-xs">
      <div id="page-contact-us-map-mobile" data-lat="1.285542" data-lng="103.851666" data-home-icon="rippledot_assets/images/icons/icon-map.svg">
      </div> <!-- page-contact-us-map -->
    </div> <!-- page-contact-us-map-container -->

    <div class="container-fluid has-breakpoint">

      <div class="row">
        <div class="col-md-12">

          <div id="page-contact-us-title">
            <div class="page-default-title">
              <h4>Contact</h4>
              <h1>How can we help you</h1>
            </div>
          </div>

        </div>
      </div>

      <div class="row">
        <div class="col-md-7">
          
        </div>
      </div>

      <div class="row">

        <div class="col-md-7 hidden-sm hidden-xs">

          <div id="page-contact-us-content-container">

            <div id="page-contact-us-map-container">
              <div id="page-contact-us-map" data-lat="1.285542" data-lng="103.851666" data-home-icon="rippledot_assets/images/icons/icon-map.svg">
              </div> <!-- page-contact-us-map -->
            </div> <!-- page-contact-us-map-container -->

          </div>

        </div>

        <div class="col-md-5">

          

          <div id="page-contact-us-detail">
            <h3>Rippledot Capital</h3>
            <p>6 Battery Road #19-02A Singapore 049909</p>

            <ul>
              <li><span>P</span><a href="tel:+65 6226 0788">+65 6226 0788</a></li>
              <!-- <li><span>F</span><a href="tel:+65 6226 2708">+65 6226 2708</a></li> -->
              <li><span>E</span><a href="mailto:info@rippledot.com">info@rippledot.com</a></li>
              <li><span>L</span><a href="https://www.linkedin.com/company/rippledot-capital" target="_blank">linkedin.com/company/rippledot-capital</a></li>
            </ul>

          </div> <!-- page-contact-us-detail -->

        </div>

      </div>
    </div>

  </article> <!-- page-contact-us-content-section -->

  <?php include "footer.php"; ?>
  <?php include "sidebar.php"; ?>
  <?php include "script_contact_us.php" ?>
</body>
</html>