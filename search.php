<?php 
  global $current_page;

  $current_page = "search-page";
?>
<!doctype html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang=""> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8" lang=""> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9" lang=""> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang=""> <!--<![endif]-->
<head>
  <?php include 'head.php'; ?>
</head>

<body class="page-search min-height-mobile-version">
  <?php include "header.php"; ?>

  
  <article id="page-search-expertise-section" class="min-height-target-mobile">

    <div class="desktop-header-spacer"></div>
    <div class="mobile-header-spacer"></div>


    <div class="container-fluid has-breakpoint">
      <div class="row">
        <div class="col-md-12 col-md-push-0 col-sm-10 col-sm-push-1 col-xs-12 col-xs-push-0">

          <div id="page-search-expertise-title">

            <?php 

              
              $target_search_results = '';

              if (isset($_GET["search-param"])) {
                $target_search_results = htmlspecialchars($_GET["search-param"]);
              } else {
                $target_search_results = 'nothing';
              }
            ?>

            <h2>Search results for: <?php echo $target_search_results;?></h2>

            <p>Here are some pages that might be related to your search</p>


          </div>

        </div>
      </div>



      <div class="row">

        <div class="col-md-12 col-md-push-0 col-sm-10 col-sm-push-1 col-xs-12 col-xs-push-0">

          <div id="page-search-expertise-item-container-container">
            <div id="page-search-expertise-item-container" class="manic-box-item-container">

              <div class="page-search-expertise-item manic-box-item">
                <div class="manic-box-item-content">
                  <h4>01</h4>
                  <h3><a href="index.php">Voluptate velit esse</a></h3>
                  <p>Lorem ipsum dolor sit amet, consect etuer there adipiscing elit. Aenean commodo an ligula eget dolor tenean massa tum sociis natoque penatibus the magnis disanc ther parturient montes nascetur ridiculus felis eu pede mollis mus. </p>
                </div>
              </div> <!-- page-search-expertise-item -->

              <div class="page-search-expertise-item manic-box-item">
                <div class="manic-box-item-content">
                  <h4>02</h4>
                  <h3><a href="index.php">Aliquip ex ea commodo</a></h3>
                  <p>Lorem ipsum dolor sit amet, consect etuer there adipiscing elit. Aenean commodo an ligula eget dolor tenean massa tum sociis natoque penatibus the magnis disanc ther parturient montes nascetur ridiculus felis eu pede mollis mus. </p>
                </div>
              </div> <!-- page-search-expertise-item -->

              <div class="page-search-expertise-item manic-box-item">
                <div class="manic-box-item-content">
                  <h4>03</h4>
                  <h3><a href="index.php">Ad minim veniam</a></h3>
                  <p>Lorem ipsum dolor sit amet, consect etuer there adipiscing elit. Aenean commodo an ligula eget dolor tenean massa tum sociis natoque penatibus the magnis disanc ther parturient montes nascetur ridiculus felis eu pede mollis mus. </p>
                </div>
              </div> <!-- page-search-expertise-item -->

              <div class="page-search-expertise-item manic-box-item">
                <div class="manic-box-item-content">
                  <h4>04</h4>
                  <h3><a href="index.php">Cillum dolore eu fugiat nulla pariatur</a></h3>
                  <p>Lorem ipsum dolor sit amet, consect etuer there adipiscing elit. Aenean commodo an ligula eget dolor tenean massa tum sociis natoque penatibus the magnis disanc ther parturient montes nascetur ridiculus felis eu pede mollis mus. </p>
                </div>
              </div> <!-- page-search-expertise-item -->

              <div class="page-search-expertise-item manic-box-item">
                <div class="manic-box-item-content">
                  <h4>05</h4>
                  <h3><a href="index.php">Quis nostrud exercitation ullamco</a></h3>
                  <p>Lorem ipsum dolor sit amet, consect etuer there adipiscing elit. Aenean commodo an ligula eget dolor tenean massa tum sociis natoque penatibus the magnis disanc ther parturient montes nascetur ridiculus felis eu pede mollis mus. </p>
                </div>
              </div> <!-- page-search-expertise-item -->

              <div class="page-search-expertise-item manic-box-item">
                <div class="manic-box-item-content">
                  <h4>06</h4>
                  <h3><a href="index.php">Culpa qui officia deserunt</a></h3>
                  <p>Lorem ipsum dolor sit amet, consect etuer there adipiscing elit. Aenean commodo an ligula eget dolor tenean massa tum sociis natoque penatibus the magnis disanc ther parturient montes nascetur ridiculus felis eu pede mollis mus. </p>
                </div>
              </div> <!-- page-search-expertise-item -->

            </div> <!-- page-search-expertise-item-container -->


            <div id="page-search-expertise-cta-container" class="hidden-sm hidden-xs">
              <a href="index.php" class="large-arrow-cta">Back to home</a>
            </div>
            
          </div> <!-- page-search-expertise-item-container-container -->


          
          

        </div>
      </div>
    </div>

    <div id="page-search-cta-container-spacer" class="visible-sm visible-xs"></div>
    <div id="page-search-cta-container" class="visible-sm visible-xs">
      <a href="index.php" class="square-cta red-version full-width-version"><span class="arrow"></span>Back to home</a>
    </div>

  </article> <!-- page-search-expertise-section -->
    
  <?php include "footer.php"; ?>
  <?php include "sidebar.php"; ?>
  <?php include "script_people.php" ?>
</body>
</html>