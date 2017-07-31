<?php 
  global $current_page;

  $current_page = "home-page";
?>
<!doctype html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang=""> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8" lang=""> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9" lang=""> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang=""> <!--<![endif]-->
<head>
  <?php include 'head.php'; ?>
</head>

<body class="page-home">
  <?php include "header.php"; ?>

  <div id="fullpage">
    <div class="fullpage-section fp-noscroll" data-anchor="banner">

      <!--
         ____    _    _   _ _   _ _____ ____
        | __ )  / \  | \ | | \ | | ____|  _ \
        |  _ \ / _ \ |  \| |  \| |  _| | |_) |
        | |_) / ___ \| |\  | |\  | |___|  _ <
        |____/_/   \_\_| \_|_| \_|_____|_| \_\

      -->

      <article id="page-home-banner-section">

        <div id="page-home-banner-image">
          <div class="manic-image-container">
            <img src="" 
              data-image-desktop="images_cms/home/home-banner-v2a.jpg"
              data-image-tablet="images_cms/home/home-banner-v2a-tablet.jpg"
              data-image-mobile="images_cms/home/home-banner-v2a-mobile.jpg">
          </div>
        </div>

        <div id="page-home-banner-copy-center-container">
          <div id="page-home-banner-copy-center">

            <div class="container-fluid has-breakpoint">
              <div class="row">
                <!--
                  <div class="col-md-1"></div>
                 -->
                <div class="col-md-8 col-md-push-0 col-sm-10 col-sm-push-1 col-xs-12 col-xs-push-0">

                  <div id="page-home-banner-copy">
                    <h1>Rippledot Capital</h1>

                    <!-- old tag line -->
                    <!-- <h4>A consultant based approach <br class="visible-xs">to M & A drives our success</h4> -->

                    <h4>Connecting Enterprise to Capital</h4>

                  </div> <!-- page-home-banner-copy -->


                </div>
              </div>
            </div>

          </div> <!-- page-home-banner-copy-center -->
        </div> <!-- page-home-banner-copy-container-v2 -->


        <div class="scroll-down-cta">
          <span class="circle-01"></span>
          <span class="circle-02"></span>
          <span class="circle-03"></span>
          <span class="arrow"></span>
        </div>

      </article> <!-- page-home-banner-section -->

    </div> <!-- fullpage-section -->
    <div class="fullpage-section fp-noscroll" data-anchor="who-we-are" id="page-home-about-fullpage-section">
      
      <!--
        __        ___   _  ___   __        _______      _    ____  _____
        \ \      / / | | |/ _ \  \ \      / / ____|    / \  |  _ \| ____|
         \ \ /\ / /| |_| | | | |  \ \ /\ / /|  _|     / _ \ | |_) |  _|
          \ V  V / |  _  | |_| |   \ V  V / | |___   / ___ \|  _ <| |___
           \_/\_/  |_| |_|\___/     \_/\_/  |_____| /_/   \_\_| \_\_____|

      -->

      <article id="page-home-about-section">

        <div class="desktop-header-spacer"></div>

        <div id="page-home-about-center-container">
          <div id="page-home-about-center">

            <div class="container-fluid has-breakpoint">
              <div class="row">
                <div class="col-md-5 col-md-push-0 col-sm-10 col-sm-push-1 col-xs-12 col-xs-push-0">

                  <div id="page-home-about-sidebar">

                    <div class="page-default-title">
                      <h4>who we are</h4>
                      <h2>Bespoke Effective Client-Driven</h2>
                    </div> <!-- page-default-title -->

                    <div id="page-home-about-intro">
                      <div class="default-copy">
                        <p>We are Southeast Asia’s leading independent mergers and acquisition financial advisory firm based in Singapore.</p>
                      </div>
                    </div> <!-- page-home-about-intro -->
                    
                    <div id="page-home-about-copy">
                      <div class="default-copy">
                        <p>We have a reputation for a high deal completion rate. Deep domain knowledge gives the team insights into a business that ultimately translates into maximising both a client’s value and deal certainty.</p>
                        <p>We provide cross-border expertise and insight with a team that has extensive experience in the global business practice.</p>
                      </div>
                      <div class="cta-container">
                        <a href="profile.php" class="arrow-cta">Read more</a>
                      </div>
                    </div> <!-- page-home-about-copy -->


                    <div id="page-home-map-container-mobile" class="visible-sm visible-xs">
                      <div id="page-home-map-mobile">
                        <img class="home-map-bg" src="images_cms/home/home-map-dots.png">
                        <img class="home-map-svg" src="images_cms/home/home-map-lines-static.svg">
                      </div>
                    </div>

                  </div> <!-- page-home-about-sidebar -->

                </div>


                <div class="col-md-7 hidden-sm hidden-xs">

                  <div id="page-home-map-container">

                    <div id="page-home-map">
                      <div id="home-map-bg-image">
                        <img src="images_cms/home/home-map-dots.png">
                      </div>
                      <div class="manic-animated-svg" id="home-map-animated-svg" data-image="images_cms/home/home-map-lines-nonlooping.svg"></div>
                      <div id="home-map-animated-svg-fallback">
                        <img src="images_cms/home/home-map-lines-fallback.png">
                      </div>
                    </div> <!-- page-home-map -->
                    
                  </div> <!-- page-home-map-container -->


                </div>

              </div>
            </div> <!-- container-fluid -->
            
          </div> <!-- page-home-about-center -->
        </div> <!-- page-home-about-center-container -->

      </article> <!-- page-home-about-section -->
      
    </div> <!-- fullpage-section -->
    <div class="fullpage-section fp-noscroll" data-anchor="expertise-1">

      <!--
          ___  _
         / _ \/ |
        | | | | |
        | |_| | |
         \___/|_|

      -->

      <article class="page-home-expertise-section" id="page-home-expertise-01-section">

        <div class="page-home-expertise-image">
          <div class="manic-image-container">
            <img src="" 
              data-image-desktop="images_cms/home/home-expertise-01.jpg"
              data-image-tablet="images_cms/home/home-expertise-01-tablet.jpg"
              data-image-mobile="images_cms/home/home-expertise-01-mobile.jpg">
          </div>
        </div>

        <div id="page-home-expertise-copy-01" class="page-home-expertise visible-md visible-lg">
          <div class="container-fluid has-breakpoint">

            <div class="row">
              <div class="col-md-12">

                <div class="row">
                  <div class="col-md-1"></div>
                  <div class="col-md-3">
                    <div class="column-01">

                      <div class="page-home-expertise-sidebar">
                        <div class="page-default-title white-version">
                          <h4>our expertise</h4>
                          <h2>Unisteel <br>Technology <br>Limited</h2>
                        </div> <!-- page-default-title -->
                      </div> <!-- page-home-expertise-sidebar -->

                    </div>
                  </div>
                  <div class="col-md-1"></div>
                  <div class="col-md-5">

                    <div class="column-02">
                      <div class="page-home-expertise-copy">

                        <div class="default-copy">
                          <p>We advised Kohlberg Kravis Roberts (KKR) on the sale of Unisteel Technology Limited to the SFS Group.</p>
                        </div>

                        <div class="row">
                          <div class="col-md-5">
                            <div class="detail-item">
                              <h4>Transaction size</h4>
                              <p><strong>Undisclosed</strong></p>
                            </div>
                          </div>
                          <div class="col-md-5">
                            <div class="detail-item">
                              <h4>Date</h4>
                              <p><strong>August 2012</strong></p>
                            </div>
                          </div>
                        </div>

                        <div class="cta-container">
                          <a href="transaction-index.php" class="arrow-cta red-brown-version">See all transactions</a>
                        </div>

                      </div> <!-- page-home-expertise-copy -->
                    </div> <!-- column-02 -->

                  </div>
                  <div class="col-md-2">

                    <div class="column-03">
                      <div class="page-home-expertise-cta-container">
                        <a href="transaction-detail-unisteel.php" class="large-arrow-cta red-brown-version">Read more</a>
                      </div> <!-- page-home-expertise-cta-container -->
                    </div> <!-- column-03 -->

                  </div>
                </div>

              </div>
            </div>

          </div>
        </div> <!-- page-home-expertise-copy-01 -->



        <div class="page-home-expertise-mobile visible-sm visible-xs">

          <div class="page-home-expertise-part-01-mobile">
            <div class="container-fluid">
              <div class="row">
                <div class="col-sm-10 col-sm-push-1 col-xs-12 col-xs-push-0">

                  <div class="page-default-title">
                    <h4>our expertise</h4>
                    <h2><a href="transaction-detail-unisteel.php">Unisteel <br>Technology <br>Limited</a></h2>
                  </div> <!-- page-default-title -->

                  <div class="row">
                    <div class="col-xs-6">

                      <div class="default-detail-item">
                        <h4>Transaction size</h4>
                        <p>Undisclosed</p>
                      </div>

                    </div>
                    <div class="col-xs-6">
                      <div class="default-detail-item">
                        <h4>Date</h4>
                        <p>August 2012</p>
                      </div>

                    </div>
                  </div>

                </div>
              </div>


            </div>
          </div> <!-- page-home-expertise-part-01-mobile -->

          <div class="page-home-expertise-part-02-mobile">
            <div class="container-fluid">
              <div class="row">
                <div class="col-sm-10 col-sm-push-1 col-xs-12 col-xs-push-0">

                  <div class="page-home-expertise-copy-mobile">
                    <div class="default-copy">
                      <p>We advised Kohlberg Kravis Roberts (KKR) on the sale of Unisteel Technology Limited to the SFS Group.</p>
                    </div>

                    <div class="cta-container">
                      <a href="transaction-index.php" class="arrow-cta red-brown-version">See all transactions</a>
                      <div class="cta-spacer"></div>
                      <a href="transaction-detail-unisteel.php" class="arrow-cta red-brown-version">Read more</a>
                    </div>

                  </div> <!-- page-home-expertise-copy-mobile -->

                </div>


              </div>
            </div>
          </div> <!-- page-home-expertise-part-02-mobile -->
        </div> <!-- page-home-expertise-mobile -->

      </article> <!-- page-home-expertise-section -->
      
    </div> <!-- fullpage-section -->
    <div class="fullpage-section fp-noscroll" data-anchor="expertise-2">

      <!--
          ___ ____
         / _ \___ \
        | | | |__) |
        | |_| / __/
         \___/_____|

      -->

      <article class="page-home-expertise-section" id="page-home-expertise-02-section">

        <div class="page-home-expertise-image">
          <div class="manic-image-container">
            <img src="" 
              data-image-desktop="images_cms/home/home-expertise-02.jpg"
              data-image-tablet="images_cms/home/home-expertise-02-tablet.jpg"
              data-image-mobile="images_cms/home/home-expertise-02-mobile.jpg">
          </div>
        </div>

        <div id="page-home-expertise-copy-02" class="page-home-expertise visible-md visible-lg">
          <div class="container-fluid has-breakpoint">

            <div class="row">
              <div class="col-md-12">

                <div class="row">
                  <div class="col-md-1"></div>
                  <div class="col-md-3">
                    <div class="column-01">

                      <div class="page-home-expertise-sidebar">
                        <div class="page-default-title white-version">
                          <h4>our expertise</h4>
                          <h2>Myanmar <br>Brewery</h2>
                        </div> <!-- page-default-title -->
                      </div> <!-- page-home-expertise-sidebar -->

                    </div>
                  </div>
                  <div class="col-md-1"></div>
                  <div class="col-md-5">

                    <div class="column-02">
                      <div class="page-home-expertise-copy">

                        <div class="default-copy">
                          <p>We advised Kohlberg Kirin Holdings on the acquisition of a 55% shareholding in Myanmar Brewery from Fraser.</p>
                        </div>

                        <div class="row">
                          <div class="col-md-5">
                            <div class="detail-item">
                              <h4>Transaction size</h4>
                              <p><strong>US$560m</strong></p>
                            </div>
                          </div>
                          <div class="col-md-5">
                            <div class="detail-item">
                              <h4>Date</h4>
                              <p><strong>August 2015</strong></p>
                            </div>
                          </div>
                        </div>

                        <div class="cta-container">
                          <a href="transaction-index.php" class="arrow-cta red-brown-version">See all transactions</a>
                        </div>

                      </div> <!-- page-home-expertise-copy -->
                    </div> <!-- column-02 -->

                  </div>
                  <div class="col-md-2">

                    <div class="column-03">
                      <div class="page-home-expertise-cta-container">
                        <a href="transaction-detail-myanmar-brewery.php" class="large-arrow-cta red-brown-version">Read more</a>
                      </div> <!-- page-home-expertise-cta-container -->
                    </div> <!-- column-03 -->

                  </div>
                </div>

              </div>
            </div>

          </div>
        </div> <!-- page-home-expertise-copy-02 -->



        <div class="page-home-expertise-mobile visible-sm visible-xs">

          <div class="page-home-expertise-part-01-mobile">
            <div class="container-fluid">
              <div class="row">
                <div class="col-sm-10 col-sm-push-1 col-xs-12 col-xs-push-0">

                  <div class="page-default-title">
                    <h4>our expertise</h4>
                    <h2><a href="transaction-detail-myanmar-brewery.php">Myanmar <br>Brewery</a></h2>
                  </div> <!-- page-default-title -->

                  <div class="row">
                    <div class="col-xs-6">

                      <div class="default-detail-item">
                        <h4>Transaction size</h4>
                        <p>US$560m</p>
                      </div>

                    </div>
                    <div class="col-xs-6">
                      <div class="default-detail-item">
                        <h4>Date</h4>
                        <p>August 2015</p>
                      </div>

                    </div>
                  </div>

                </div>
              </div>


            </div>
          </div> <!-- page-home-expertise-part-01-mobile -->

          <div class="page-home-expertise-part-02-mobile">
            <div class="container-fluid">
              <div class="row">
                <div class="col-sm-10 col-sm-push-1 col-xs-12 col-xs-push-0">

                  <div class="page-home-expertise-copy-mobile">
                    <div class="default-copy">
                      <p>We advised Kohlberg Kirin Holdings on the acquisition of a 55% shareholding in Myanmar Brewery from Fraser.</p>
                    </div>

                    <div class="cta-container">
                      <a href="transaction-index.php" class="arrow-cta red-brown-version">See all transactions</a>
                      <div class="cta-spacer"></div>
                      <a href="transaction-detail-myanmar-brewery.php" class="arrow-cta red-brown-version">Read more</a>
                    </div>

                  </div> <!-- page-home-expertise-copy-mobile -->

                </div>


              </div>
            </div>
          </div> <!-- page-home-expertise-part-02-mobile -->
        </div> <!-- page-home-expertise-mobile -->
        
      </article> <!-- page-home-expertise-section -->
      
    </div> <!-- fullpage-section -->
    <div class="fullpage-section fp-noscroll" data-anchor="expertise-3">

      <!--
          ___ _____
         / _ \___ /
        | | | ||_ \
        | |_| |__) |
         \___/____/

      -->

      <article class="page-home-expertise-section" id="page-home-expertise-03-section">

        <div class="page-home-expertise-image">
          <div class="manic-image-container">
            <img src=""
              data-image-desktop="images_cms/home/home-expertise-03-new.jpg"
              data-image-tablet="images_cms/home/home-expertise-03-tablet.jpg"
              data-image-mobile="images_cms/home/home-expertise-03-mobile.jpg">
          </div>
        </div>

        <div id="page-home-expertise-copy-03" class="page-home-expertise visible-md visible-lg">
          <div class="container-fluid has-breakpoint">

            <div class="row">
              <div class="col-md-12">

                <div class="row">
                  <div class="col-md-1"></div>
                  <div class="col-md-3">
                    <div class="column-01">

                      <div class="page-home-expertise-sidebar">
                        <div class="page-default-title white-version">
                          <h4>our expertise</h4>
                          <h2>Goodpack <br>Limited</h2>
                        </div> <!-- page-default-title -->
                      </div> <!-- page-home-expertise-sidebar -->

                    </div>
                  </div>
                  <div class="col-md-1"></div>
                  <div class="col-md-5">

                    <div class="column-02">
                      <div class="page-home-expertise-copy">

                        <div class="default-copy">
                          <p>We were the exclusive financial adviser to Goodpack Limited on the acquisition of a wholly-owned subsidiary of KKR Asian II Fund.</p>
                        </div>

                        <div class="row">
                          <div class="col-md-5">
                            <div class="detail-item">
                              <h4>Transaction size</h4>
                              <p><strong>S$1,399m</strong></p>
                            </div>
                          </div>
                          <div class="col-md-5">
                            <div class="detail-item">
                              <h4>Date</h4>
                              <p><strong>September 2014</strong></p>
                            </div>
                          </div>
                        </div>

                        <div class="cta-container">
                          <a href="transaction-index.php" class="arrow-cta red-brown-version">See all transactions</a>
                        </div>

                      </div> <!-- page-home-expertise-copy -->
                    </div> <!-- column-02 -->

                  </div>
                  <div class="col-md-2">

                    <div class="column-03">
                      <div class="page-home-expertise-cta-container">
                        <a href="transaction-detail-goodpack.php" class="large-arrow-cta red-brown-version">Read more</a>
                      </div> <!-- page-home-expertise-cta-container -->
                    </div> <!-- column-03 -->

                  </div>
                </div>

              </div>
            </div>

          </div>
        </div> <!-- page-home-expertise-copy-03 -->



        <div class="page-home-expertise-mobile visible-sm visible-xs">

          <div class="page-home-expertise-part-01-mobile">
            <div class="container-fluid">
              <div class="row">
                <div class="col-sm-10 col-sm-push-1 col-xs-12 col-xs-push-0">

                  <div class="page-default-title">
                    <h4>our expertise</h4>
                    <h2><a href="transaction-detail-goodpack.php">Goodpack <br>Limited</a></h2>
                  </div> <!-- page-default-title -->

                  <div class="row">
                    <div class="col-xs-6">

                      <div class="default-detail-item">
                        <h4>Transaction size</h4>
                        <p>S$1,399m</p>
                      </div>

                    </div>
                    <div class="col-xs-6">
                      <div class="default-detail-item">
                        <h4>Date</h4>
                        <p>September 2014</p>
                      </div>

                    </div>
                  </div>

                </div>
              </div>


            </div>
          </div> <!-- page-home-expertise-part-01-mobile -->

          <div class="page-home-expertise-part-02-mobile">
            <div class="container-fluid">
              <div class="row">
                <div class="col-sm-10 col-sm-push-1 col-xs-12 col-xs-push-0">

                  <div class="page-home-expertise-copy-mobile">
                    <div class="default-copy">
                      <p>We were the exclusive financial adviser to Goodpack Limited on the acquisition of a wholly-owned subsidiary of KKR Asian II Fund.</p>
                    </div>

                    <div class="cta-container">
                      <a href="transaction-index.php" class="arrow-cta red-brown-version">See all transactions</a>
                      <div class="cta-spacer"></div>
                      <a href="transaction-detail-goodpack.php" class="arrow-cta red-brown-version">Read more</a>
                    </div>

                  </div> <!-- page-home-expertise-copy-mobile -->

                </div>


              </div>
            </div>
          </div> <!-- page-home-expertise-part-02-mobile -->
        </div>
        
      </article> <!-- page-home-expertise-section -->
      
    </div> <!-- fullpage-section -->



    <div class="fullpage-section" data-anchor="targeted-approach" id="page-home-infographic-fullpage-section">

      <!--
         ___ _   _ _____ ___   ____ ____      _    ____  _   _ ___ ____
        |_ _| \ | |  ___/ _ \ / ___|  _ \    / \  |  _ \| | | |_ _/ ___|
         | ||  \| | |_ | | | | |  _| |_) |  / _ \ | |_) | |_| || | |
         | || |\  |  _|| |_| | |_| |  _ <  / ___ \|  __/|  _  || | |___
        |___|_| \_|_|   \___/ \____|_| \_\/_/   \_\_|   |_| |_|___\____|

      -->

      <article id="page-home-infographic-section">

        <div class="desktop-header-spacer"></div>

        <div id="page-home-infographic-center-container">
          <div id="page-home-infographic-center">
            

            <div class="container-fluid has-breakpoint">
              <div class="row">
                <div class="col-md-12 col-md-push-0 col-sm-10 col-sm-push-1 col-xs-12 col-xs-push-0">

                  <div id="page-home-infographic-title">
                    <h2>Our targeted approach achieves results</h2>
                  </div> <!-- page-home-infographic-title -->

                </div>
              </div> <!-- row -->

              <div class="row">
                <div class="col-md-6 col-md-push-3">





                </div>
              </div>

              <div class="row">
                <div class="col-md-12">

                  <div id="page-home-infographic-container">



                    <div id="page-home-infographic-01">
                      
                      <div id="page-home-infographic-canvas-01" class="page-home-infographic-canvas" data-rotation="-55" data-percent="0.7" data-odometer-value="2000">
                        <div class="raphael-container"></div>

                        <div class="page-home-infographic-copy">
                          <h3><span class="odometer">0</span></h3>
                          <p>Average amount of <br>hours per deal</p>
                        </div>
                      </div>

                    </div> <!-- page-home-infographic-01 -->

                    <div id="page-home-infographic-02">

                      <div id="page-home-infographic-canvas-02" class="page-home-infographic-canvas" data-rotation="0" data-percent="0.75" data-odometer-value="5.0">
                        <div class="raphael-container"></div>
                        
                        <div class="page-home-infographic-copy">
                          <h3>$<span class="odometer">0.0</span> billion</h3>
                          <p>Transaction capital</p>
                          <small>Whole figure of every <br>deal combined</small>
                        </div>
                      </div>

                    </div> <!-- page-home-infographic-02 -->


                    <div id="page-home-infographic-03">
                      
                      <div id="page-home-infographic-canvas-03" class="page-home-infographic-canvas" data-rotation="90" data-percent="0.8" data-odometer-value="4">
                        <div class="raphael-container"></div>
                        
                        <div class="page-home-infographic-copy one-liner-version">
                          <h3><span class="odometer">0</span>:5</h3>
                          <p>Win ratio</p>
                        </div>
                      </div>

                    </div> <!-- page-home-infographic-03 -->
                    
                    
                  </div> <!-- page-home-infographic-container -->



                </div>
              </div> <!-- row -->


            </div> <!-- container-fluid -->


          </div> <!-- page-home-infographic-center -->
        </div> <!-- page-home-infographic-center-container -->

      </article> <!-- page-home-infographic-section -->
      

    </div> <!-- fullpage-section -->

    <div class="fullpage-section" data-anchor="our-people">
      




      <!--
         ____  _____ ___  ____  _     _____
        |  _ \| ____/ _ \|  _ \| |   | ____|
        | |_) |  _|| | | | |_) | |   |  _|
        |  __/| |__| |_| |  __/| |___| |___
        |_|   |_____\___/|_|   |_____|_____|

      -->

      <article id="page-home-people-section">

        <div class="desktop-header-spacer"></div>

        <div class="container-fluid has-breakpoint">

          <div class="row">
            <div class="col-md-4 col-md-push-0 col-sm-10 col-sm-push-1 col-xs-12 col-xs-push-0">

              <div id="page-home-people-title">
                <div class="page-default-title">
                  <h4>our people</h4>
                  <h2>Meet the Team</h2>
                </div> <!-- page-default-title -->
              </div>

            </div>
          </div>

          <div class="row">
            <div class="col-md-4">
              <div class="column-01">


                <div class="page-home-people-item">

                  <div class="row">
                    <div class="col-md-12 col-md-push-0 col-sm-10 col-sm-push-1 col-xs-12 col-xs-push-0">

                      <a href="people-detail-koh-boon-hwee.php" class="page-home-people-item-image-mobile visible-sm visible-xs">
                        <div class="manic-image-container">
                          <img src="" 
                            data-image-tablet="images_cms/home/home-people-koh-boon-hwee-tablet.jpg"
                            data-image-mobile="images_cms/home/home-people-koh-boon-hwee-mobile.jpg">
                        </div>
                      </a>

                      <a href="people-detail-koh-boon-hwee.php" class="page-home-people-item-image hidden-sm hidden-xs">
                        <div class="manic-image-container">
                          <img src="" data-image-desktop="images_cms/home/home-people-koh-boon-hwee-new.jpg">
                        </div>
                      </a>

                      <div class="page-home-people-item-title">
                        <h3><a href="people-detail-koh-boon-hwee.php">Koh Boon Hwee</a></h3>
                        <h4>Chairman</h4>
                      </div>

                      <div class="page-home-people-item-copy">
                        <div class="default-copy">
                          <p>
                            <span class="quote-start"></span>
                            We focus on unique perspectives that address today’s challenges and tomorrow’s opportunities. Personally committed to client success, we see your results as our reputation.
                            <span class="quote-end"></span>
                          </p>
                        </div>
                      </div>

                      <div class="page-home-people-item-cta-container-mobile visible-sm visible-xs">
                        <a href="people-detail-koh-boon-hwee.php" class="arrow-cta grey-version">Read more</a>
                      </div>



                    </div>
                  </div> <!-- row -->

                </div> <!-- page-home-people-item -->

              </div>
            </div>
            <div class="col-md-4">
              <div class="column-02">

                <div class="page-home-people-item">
                  
                  <div class="row">
                    <div class="col-md-12 col-md-push-0 col-sm-10 col-sm-push-1 col-xs-12 col-xs-push-0">

                      <a href="people-detail-koh-boon-hwee.php" class="page-home-people-item-image-mobile  visible-sm visible-xs">
                        <div class="manic-image-container">
                          <img src="" 
                            data-image-tablet="images_cms/home/home-people-atin-kukreja-tablet.jpg"
                            data-image-mobile="images_cms/home/home-people-atin-kukreja-mobile.jpg">
                        </div>
                      </a>
                      

                      <a href="people-detail-atin-kukreja.php" class="page-home-people-item-image hidden-sm hidden-xs">
                        <div class="manic-image-container">
                          <img src="" data-image-desktop="images_cms/home/home-people-atin-kukreja-new.jpg">
                        </div>
                      </a>

                      <div class="page-home-people-item-title">
                        <h3><a href="people-detail-atin-kukreja.php">Atin Kukreja</a></h3>
                        <h4>CEO</h4>
                      </div>

                      <div class="page-home-people-item-copy">
                        <div class="default-copy">
                          <p>
                            <span class="quote-start"></span>
                            Each Team Member brings extensive industry knowledge, unrivaled relationships and substantial deal experience, resulting in a team of the industry's most sought after advisors.
                            <span class="quote-end"></span>
                          </p>
                        </div>
                      </div>

                      <div class="page-home-people-item-cta-container-mobile visible-sm visible-xs">
                        <a href="people-detail-atin-kukreja.php" class="arrow-cta grey-version">Read more</a>
                      </div>

                    </div>
                  </div> <!-- row -->

                  
                </div> <!-- page-home-people-item -->

              </div>
            </div>
            <div class="col-md-4">
              <div class="column-03">

                <div class="page-home-people-item last-version">

                  <div class="row">
                    <div class="col-md-12 col-md-push-0 col-sm-10 col-sm-push-1 col-xs-12 col-xs-push-0">

                      <a href="people-detail-koh-boon-hwee.php" class="page-home-people-item-image-mobile visible-sm visible-xs">
                        <div class="manic-image-container">
                          <img src="" 
                            data-image-tablet="images_cms/home/home-people-brad-wong-tablet.jpg"
                            data-image-mobile="images_cms/home/home-people-brad-wong-mobile.jpg">
                        </div>
                      </a>

                      <a href="people-detail-brad-wong.php" class="page-home-people-item-image hidden-sm hidden-xs">
                        <div class="manic-image-container">
                          <img src="" data-image-desktop="images_cms/home/home-people-brad-wong-new.jpg">
                        </div>
                      </a>

                      <div class="page-home-people-item-title">
                        <h3><a href="people-detail-brad-wong.php">Brad Wong</a></h3>
                        <h4>Managing Director</h4>
                      </div>

                      <div class="page-home-people-item-copy">
                        <div class="default-copy">
                          <p>
                            <span class="quote-start"></span>
                            We are experienced bankers who manage the process from start to end, dealing with and anticipating issues, ensuring maximum deal certainty and a strong result.
                            <span class="quote-end"></span>
                          </p>
                        </div>
                      </div>

                      <div class="page-home-people-item-cta-container-mobile visible-sm visible-xs">
                        <a href="people-detail-brad-wong.php" class="arrow-cta grey-version">Read more</a>
                      </div>

                    </div>
                  </div> <!-- row -->
                  
                </div> <!-- page-home-people-item -->
                
              </div>
            </div>
          </div> <!-- row -->



          <div class="row hidden-sm hidden-xs">
            <div class="col-md-4">
              <div class="column-01">
                <div class="page-home-people-item-cta-container">
                  <a href="people-detail-koh-boon-hwee.php" class="arrow-cta grey-version">Read more</a>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="column-02">
                <div class="page-home-people-item-cta-container">
                  <a href="people-detail-atin-kukreja.php" class="arrow-cta grey-version">Read more</a>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="column-03">
                <div class="page-home-people-item-cta-container">
                  <a href="people-detail-brad-wong.php" class="arrow-cta grey-version">Read more</a>
                </div>
              </div>
            </div>
          </div> <!-- row -->

          <div class="row hidden-sm hidden-xs">
            <div class="col-md-8"></div>
            <div class="col-md-4">

              <div id="page-home-people-index-cta-container">
                <a href="people-index.php" class="large-arrow-cta">Our people</a>
              </div> <!-- page-home-people-index-cta-container -->
              
            </div>
          </div>

        </div> <!-- container-fluid -->


      </article>
      
      <div class="cta-container visible-sm visible-xs">
        <a href="contact-us.php" class="square-cta red-version full-width-version"><span class="arrow"></span>Contact Us</a>
      </div>

      <?php include "desktop_footer.php"; ?>

    </div> <!-- fullpage-section -->
    
  </div> <!-- fullpage -->







  <!--
     __  __  ___  ____ ___ _     _____
    |  \/  |/ _ \| __ )_ _| |   | ____|
    | |\/| | | | |  _ \| || |   |  _|
    | |  | | |_| | |_) | || |___| |___
    |_|  |_|\___/|____/___|_____|_____|

  -->

  

  


  <?php include "footer.php"; ?>
  <?php include "sidebar.php"; ?>
  <?php include "script_home.php" ?>
</body>
</html>