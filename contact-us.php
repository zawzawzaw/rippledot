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

          <div id="page-contact-us-copy">
            <div class="default-copy">
              <p>Thank you for your visit. Here you can ask us questions or simply send us your inquiry.</p>
            </div>
          </div> <!-- page-contact-us-copy -->

        </div>
      </div>

      <div class="row">

        <div class="col-md-7">

          <div id="page-contact-us-content-container">

            

            <form id="page-contact-us-form" class="default-form simple-form-check"
              action="contact-us-thank-you.php"
              method="POST">

              <div class="row">
                <div class="col-md-6 col-sm-6">

                  <div class="form-group dropdown-version">
                    <label>Salutation*</label>

                    <!-- 
                    <div class="dropdown">
                      <select class="required" id="contact-salutation" name="contact-salutation" >
                        <option value="">Please select</option>
                        <option>Mr.</option>
                        <option>Ms.</option>
                        <option>Mrs.</option>
                        <option>Dr.</option>
                      </select>
                    </div>
                    -->

                    <div class="manic-dropdown">
                      <select class="required" id="contact-salutation" name="contact-salutation" >
                        <option value="">Please select</option>
                        <option>Mr.</option>
                        <option>Ms.</option>
                        <option>Mrs.</option>
                        <option>Dr.</option>
                      </select>
                    </div>

                  </div>

                </div>
                <div class="col-md-6 col-sm-6">

                  <div class="form-group">
                    <label>Email address*</label>
                    <input class="required only-email" type="text" id="contact-email-address" name="contact-email-address" placeholder="Please enter your email address">
                  </div>
                  
                </div>
              </div>

              <div class="row">
                <div class="col-md-6 col-sm-6">

                  <div class="form-group">
                    <label>Full name*</label>
                    <input class="required" type="text" id="contact-full-name" name="contact-full-name" placeholder="How should we address you">
                  </div>

                </div>
                <div class="col-md-6 col-sm-6">

                  <div class="form-group">
                    <label>Contact number</label>
                    <input class="" type="text" id="contact-contact-number" name="contact-contact-number" placeholder="Include country code">
                  </div>
                  
                </div>
              </div>

              <div class="form-group">
                <label>Subject*</label>
                <input class="required" type="text" id="contact-subject" name="contact-subject" placeholder="Please enter your subject">
              </div>

              <div class="form-group">
                <label>Message*</label>
                <textarea class="required" id="contact-message" name="contact-message" placeholder="Please write your message here."></textarea>
              </div>

              
              <div class="cta-container hidden-sm hidden-xs">
                <p>*Mandatory fields are required</p>

                <a href="javascript:void(0);" class="large-arrow-cta form-check-submit-btn">Submit Now</a>
              </div>



              
              <div class="sans-container-fluid-tablet">
                <div id="page-what-we-do-cta-container-spacer" class="visible-sm visible-xs"></div>
                <div id="page-what-we-do-cta-container" class="visible-sm visible-xs">
                  <a href="javascript:void(0);" class="square-cta red-version full-width-version form-check-submit-btn"><span class="arrow"></span>Submit Now</a>
                </div>
              </div>



            </form> <!-- page-contact-us-form -->
            

          </div>

        </div>

        <div class="col-md-5 hidden-sm hidden-xs">

          <div id="page-contact-us-map-container">
            <div id="page-contact-us-map" data-lat="1.285542" data-lng="103.851666" data-home-icon="rippledot_assets/images/icons/icon-map.svg">
            </div> <!-- page-contact-us-map -->
          </div> <!-- page-contact-us-map-container -->


          <div id="page-contact-us-detail">
            <h3>Rippledot Capital</h3>
            <p>6 Battery Road #19-02A Singapore 049909</p>

            <ul>
              <li><span>P</span><a href="tel:+65 6226 0788">+65 6226 0788</a></li>
              <li><span>F</span><a href="tel:+65 6226 2708">+65 6226 2708</a></li>
              <li><span>E</span><a href="mailto:info@rippledot.com">info@rippledot.com</a></li>
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