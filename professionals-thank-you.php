<?php 
  global $current_page;

  $current_page = "thank-you-page";
?>
<!doctype html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang=""> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8" lang=""> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9" lang=""> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang=""> <!--<![endif]-->
<head>
  <?php include 'head.php'; ?>
</head>

<body class="page-thank-you min-height-version min-height-mobile-version">
  <?php include "header.php"; ?>

  <!--
      ____ ___  _   _ _____ _____ _   _ _____
     / ___/ _ \| \ | |_   _| ____| \ | |_   _|
    | |  | | | |  \| | | | |  _| |  \| | | |
    | |__| |_| | |\  | | | | |___| |\  | | |
     \____\___/|_| \_| |_| |_____|_| \_| |_|

  -->

  <article id="page-thank-you-content-section" class="min-height-target min-height-target-mobile">

    <div class="desktop-header-spacer"></div>
    <div class="mobile-header-spacer"></div>

    <div class="container-fluid has-breakpoint">
      <div class="row">

        <div class="col-md-6 col-md-push-3 col-sm-8 col-sm-push-2 col-xs-12 col-xs-push-0">

          <div id="page-thank-you-content">
            <div class="page-default-title">
              <!-- <h4>Careers</h4> -->
              <h1>Thank You</h1>
            </div> <!-- page-default-title -->

            <div class="default-copy">
              <p>Thank you for your interest in a career with Rippledot Capital. We have received your application and a member of our team will be in touch should your skills be a close match for this position.</p>
            </div> <!-- default-copy -->

            <div class="cta-container hidden-sm hidden-xs">
              <a href="index.php" class="arrow-cta">Back to home</a>
            </div>

          </div> <!-- page-thank-you-content -->

        </div>
      </div>
    </div>


    <div id="page-what-we-do-cta-container-spacer" class="visible-sm visible-xs"></div>
    <div id="page-what-we-do-cta-container" class="visible-sm visible-xs">
      <a href="index.php" class="square-cta red-version full-width-version"><span class="arrow"></span>Back to home</a>
    </div>

  </article> <!-- page-thank-you-content-section -->

  <?php include "footer.php"; ?>
  <?php include "sidebar.php"; ?>
  <?php include "script.php" ?>
</body>
</html>