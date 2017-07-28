<?php 
  global $current_page;

  $current_page = "profile-page";
?>
<!doctype html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang=""> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8" lang=""> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9" lang=""> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang=""> <!--<![endif]-->
<head>
  <?php include 'head.php'; ?>
</head>

<body class="page-profile min-height-mobile-version">
  <?php include "header.php"; ?>

  <!--
     ___ _   _ _____ ____   ___
    |_ _| \ | |_   _|  _ \ / _ \
     | ||  \| | | | | |_) | | | |
     | || |\  | | | |  _ <| |_| |
    |___|_| \_| |_| |_| \_\\___/

  -->

  <article id="page-what-we-do-intro-section" class="min-height-target-mobile">

    <div class="desktop-header-spacer"></div>
    <div class="desktop-header-subnav-spacer"></div>
    <div class="mobile-header-spacer"></div>
    
    <div id="page-what-we-do-intro-image-mobile" class="visible-sm visible-xs">
      <div class="manic-image-container">
        <img src="" 
          data-image-tablet="images_cms/whoweare/profile-intro-tablet.jpg"
          data-image-mobile="images_cms/whoweare/profile-intro-mobile.jpg">
      </div>
    </div> <!-- page-what-we-do-intro-image-mobile -->


    <div class="container-fluid has-breakpoint">
      <div class="row">
        <div class="col-md-12 col-md-push-0 col-sm-10 col-sm-push-1 col-xs-12 col-xs-push-0">
          
          <div id="page-what-we-do-intro-title">
            <div class="page-default-title">
              <h4>Who We Are</h4>
              <h1>Profile</h1>
            </div>
          </div> <!-- page-what-we-do-intro-title -->

        </div>
      </div>

      <div class="row">

        <div class="col-md-5 col-tablet-landscape-6 hidden-sm hidden-xs">

          <div id="page-profile-intro-image">
            <div class="manic-image-container">
              <img src="" data-image-desktop="images_cms/whoweare/profile-intro.jpg">
            </div>
          </div> <!-- page-what-we-do-intro-image -->

          <div id="page-profile-cta-container">
            <a href="principles-and-values.php" class="large-arrow-cta">See principles & values</a>
          </div>

        </div>

        <div class="col-md-5 col-md-push-0 col-tablet-landscape-6 col-tablet-landscape-push-0 col-sm-10 col-sm-push-1 col-xs-12 col-xs-push-0">

          <div id="page-what-we-do-intro-content">
            
            <div id="page-profile-intro-introduction">
              <div class="default-copy">
                <h3>Welcome to Rippledot Capital</h3>
                <p>Rippledot Capital provides its clients with deep strategic insights and regional connectivity, delivering senior level executive experience and expertise with first class transaction execution.</p>
              </div>
            </div> <!-- page-profile-intro-introduction -->

            <div id="page-what-we-do-intro-copy">
              <div class="default-copy">
                <p>Rippledot Capital is an independent strategic and financial adviser to corporates, entrepreneurs and investors focused in the Asia Pacific region.</p>
                <p>We strive to create significant value for our clients based on our core principles of Complete Client Commitment, Regional Expertise, Sector Expertise and First Class Execution.</p>
                <p>Rippledot Capital Advisers was awarded "Best Investment Bank for the Venture Capital and Private Equity Industry" in 2013 by the Singapore Venture Capital and Private Equity Association.</p>
              </div>
            </div> <!-- page-what-we-do-intro-copy -->
          </div> <!-- page-what-we-do-intro-content -->
                    
        </div>

      </div> <!-- row -->
    </div> <!-- container-fluid -->

    
    <div id="page-what-we-do-cta-container-spacer" class="visible-sm visible-xs"></div>
    <div id="page-what-we-do-cta-container" class="visible-sm visible-xs">
      <a href="people-index.php" class="square-cta red-version full-width-version"><span class="arrow"></span>Our people</a>
    </div>

  </article> <!-- page-what-we-do-intro-section -->

  <?php include "footer.php"; ?>
  <?php include "sidebar.php"; ?>
  <?php include "script.php" ?>
</body>
</html>