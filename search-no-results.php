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

  
  <article id="page-search-expertise-02-section">

    <div class="desktop-header-spacer"></div>
    <div class="mobile-header-spacer"></div>


    <div class="container-fluid has-breakpoint">
      <div class="row">
        <div class="col-md-12 col-md-push-0 col-sm-10 col-sm-push-1 col-xs-12 col-xs-push-0">

          <div id="page-search-expertise-title" class="no-result-version">

            <?php 
              $target_search_results = '';

              if (isset($_GET["search-param"])) {
                $target_search_results = htmlspecialchars($_GET["search-param"]);
              } else {
                $target_search_results = 'nothing';
              }
            ?>

            <h2>Sorry, there are no results</h2>
            <p>We could not find <span class="highlighted"><?php echo $target_search_results;?></span></p>
          </div>


        </div>
      </div>
      
    </div>
  </article> <!-- page-search-expertise-02-section -->


  <div id="page-search-related-content-container">
  

    <!--
       ____  _____ _        _  _____ _____ ____
      |  _ \| ____| |      / \|_   _| ____|  _ \
      | |_) |  _| | |     / _ \ | | |  _| | | | |
      |  _ <| |___| |___ / ___ \| | | |___| |_| |
      |_| \_\_____|_____/_/   \_\_| |_____|____/

    -->

    <article id="page-transaction-detail-related-section" class="hidden-sm hidden-xs">

      

      <div class="container-fluid has-breakpoint">

        <div class="row">
          <div class="col-md-12">

            <div id="page-transaction-detail-related-title">
              <h2>Are you looking for our work?</h2>
            </div> <!-- page-transaction-detail-related-title -->

          </div>
        </div> <!-- row -->

        <div id="page-transaction-detail-related-item-container">

          <div class="row">
            <div class="col-md-4">
              <div class="column-01">

                <div class="page-transaction-detail-related-item">
                  <a href="transaction-detail-classic-fine-foods.php" title="Classic Fine Foods" class="related-item-image">
                    <div class="manic-image-container">
                      <img src="" data-image="images_cms/transaction/transaction-index-classic-fine-foods.jpg">
                    </div>
                  </a>

                  <div class="related-item-copy">
                    <h3><a href="transaction-detail-classic-fine-foods.php" title="Classic Fine Foods">Classic Fine Foods</a></h3>
                    <p>We were the exclusive financial adviser to the EQT Greater China II Fund on the sale of Classic Fine Foods Group to the Germany-based Metro Group, one of the largest international retailing companies.</p>
                  </div>
                </div> <!-- page-transaction-detail-related-item -->

                

              </div>
            </div>
            <div class="col-md-4">
              <div class="column-02">

                <div class="page-transaction-detail-related-item">
                  <a href="transaction-detail-myanmar-brewery.php" title="Myanmar Brewery" class="related-item-image">
                    <div class="manic-image-container">
                      <img src="" data-image="images_cms/transaction/transaction-index-myanmar-brewery.jpg">
                    </div>
                  </a>

                  <div class="related-item-copy">
                    <h3><a href="transaction-detail-myanmar-brewery.php" title="Myanmar Brewery">Myanmar Brewery</a></h3>
                    <p>We advised Kirin Holdings on the acquisition of a 55 percent shareholding in Myanmar Brewery from Fraser and Neave, valuing 100 percent of the equity in Myanmar Brewery at more than US$1 billion.</p>
                  </div>
                </div> <!-- page-transaction-detail-related-item -->

                

              </div>
            </div>
            <div class="col-md-4">
              <div class="column-03">

                <div class="page-transaction-detail-related-item">
                  <a href="transaction-detail-seksun-supernova.php" title="Seksun (Supernova)" class="related-item-image">
                    <div class="manic-image-container">
                      <img src="" data-image="images_cms/transaction/transaction-index-seksun-supernova.jpg">
                    </div>
                  </a>

                  <div class="related-item-copy">
                    <h3><a href="transaction-detail-seksun-supernova.php" title="Seksun (Supernova)">Seksun (Supernova) </a></h3>
                    <p>We were the exclusive financial adviser to Supernova (Cayman) Limited on the sale of the Seksun Group to Suzhou Anjie Technology Co. Ltd., a Shenzhen-listed manufacturer of insulation and cushioning materials for the consumer electronics industry.</p>
                  </div>
                </div> <!-- page-transaction-detail-related-item -->

                

              </div>
            </div>
          </div> <!-- row -->

          <div class="row">
            <div class="col-md-4">
              <div class="column-01">
                <div class="page-transaction-detail-related-item-cta-container">
                  <a href="transaction-detail-classic-fine-foods.php" title="Classic Fine Foods" class="arrow-cta">Read more</a>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="column-02">
                <div class="page-transaction-detail-related-item-cta-container">
                  <a href="transaction-detail-myanmar-brewery.php" title="Myanmar Brewery" class="arrow-cta">Read more</a>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="column-03">
                <div class="page-transaction-detail-related-item-cta-container">
                  <a href="transaction-detail-seksun-supernova.php" title="Seksun (Supernova)" class="arrow-cta">Read more</a>
                </div>
              </div>
            </div>
          </div> <!-- row -->

        </div> <!-- page-transaction-detail-related-item-container -->



      </div>
    </article> <!-- page-transaction-detail-related-section -->


    <!-- MOBILE -->


    <article id="page-search-related-section-mobile" class="visible-sm visible-xs">


      <div class="container-fluid">
        <div class="row">
          <div class="col-xs-0 col-sm-1"></div>
          <div class="col-xs-12 col-sm-10">

            
            <div class="page-default-title">
              <h2>Are you looking for our work?</h2>
            </div>

            <div class="space20"></div>
              
            <div class="page-transaction-detail-related-item-mobile">
              <a href="transaction-detail-classic-fine-foods.php" class="related-item-mobile-image">
                <div class="manic-image-container">
                  <img src="" data-image="images_cms/transaction/transaction-index-classic-fine-foods.jpg">
                </div>
              </a>

              <div class="related-item-mobile-copy">
                <h3><a href="transaction-detail-classic-fine-foods.php" title="Classic Fine Foods">Classic Fine Foods</a></h3>
                <p>We were the exclusive financial adviser to the EQT Greater China II Fund on the sale of Classic Fine Foods Group to the Germany-based Metro Group, one of the largest international retailing companies.</p>

                <div class="cta-container">
                  <a href="transaction-detail-classic-fine-foods.php" title="Classic Fine Foods " class="arrow-cta">Read more</a>
                </div>
              </div>
            </div>



            <div class="page-transaction-detail-related-item-mobile">
              <a href="transaction-detail-myanmar-brewery.php" class="related-item-mobile-image">
                <div class="manic-image-container">
                  <img src="" data-image="images_cms/transaction/transaction-index-myanmar-brewery.jpg">
                </div>
              </a>

              <div class="related-item-mobile-copy">
                <h3><a href="transaction-detail-myanmar-brewery.php" title="Myanmar Brewery">Myanmar Brewery</a></h3>
                <p>We advised Kirin Holdings on the acquisition of a 55 percent shareholding in Myanmar Brewery from Fraser and Neave, valuing 100 percent of the equity in Myanmar Brewery at more than US$1 billion.</p>

                <div class="cta-container">
                  <a href="transaction-detail-myanmar-brewery.php" title="Myanmar Brewery " class="arrow-cta">Read more</a>
                </div>
              </div>
            </div>

            <div class="page-transaction-detail-related-item-mobile">
              <a href="" class="related-item-mobile-image">
                <div class="manic-image-container">
                  <img src="" data-image="images_cms/transaction/transaction-index-seksun-supernova.jpg">
                </div>
              </a>

              <div class="related-item-mobile-copy">
                <h3><a href="transaction-detail-seksun-supernova.php" title="Seksun (Supernova)">Seksun (Supernova)</a></h3>
                <p>We were the exclusive financial adviser to Supernova (Cayman) Limited on the sale of the Seksun Group to Suzhou Anjie Technology Co. Ltd., a Shenzhen-listed manufacturer of insulation and cushioning materials for the consumer electronics industry.</p>

                <div class="cta-container">
                  <a href="transaction-detail-seksun-supernova.php" title="Seksun (Supernova)" class="arrow-cta">Read more</a>
                </div>
              </div>
            </div>



          </div>
        </div>
      </div>
      
      <div id="page-what-we-do-cta-container-spacer" class="visible-sm visible-xs"></div>
      <div id="page-what-we-do-cta-container" class="visible-sm visible-xs">
        <a href="index.php" class="square-cta red-version full-width-version"><span class="arrow"></span>Back to home</a>
      </div>

    </article>

  </div> <!-- page-search-related-content-container -->
    
  <?php include "footer.php"; ?>
  <?php include "sidebar.php"; ?>
  <?php include "script_people.php" ?>
</body>
</html>