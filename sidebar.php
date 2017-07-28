  
  <?php if ($current_page == "home-page"): ?>

  <aside id="desktop-sidebar" class="disabled-version center-version">
      <div id="desktop-sidebar-boxes">
        <div class="box box-01"></div>
        <div class="box box-02"></div>
        <div class="box box-03"></div>
      </div>

      <div id="desktop-sidebar-lines">
        <div class="line line-01"></div>
        <div class="line line-02"></div>
        <div class="line line-03"></div>
      </div>

      <div id="desktop-sidebar-menu">
        <nav>
          <ul>
            <li><a href="#who-we-are" class="link link-01">Who we are</a></li>
            <li><a href="#expertise-1" class="link link-02">Our expertise</a></li>
            <li><a href="#our-people" class="link link-03">Our people</a></li>
          </ul>
        </nav>
      </div>
    </aside> <!-- desktop-sidebar -->

  <?php else: ?>



    <?php 

      $target_index = -1;

      if ($current_page == "profile-page" || $current_page == "principles-and-values-page") {
        $target_index = 0;
      } elseif ($current_page == "transaction-index-page" || $current_page == "transaction-detail-page" || $current_page == "what-we-do-page") {
        $target_index = 1;
      } elseif ($current_page == "people-index-page" || $current_page == "people-detail-page") {
        $target_index = 2;
      }

    ?>



    <aside id="desktop-sidebar" class="disabled-version center-version">
      <div id="desktop-sidebar-boxes">
        <div class="box box-01 <?php if($target_index == 0) { echo 'selected'; } ?>"></div>
        <div class="box box-02 <?php if($target_index == 1) { echo 'selected'; } ?>"></div>
        <div class="box box-03 <?php if($target_index == 2) { echo 'selected'; } ?>"></div>
      </div>

      <div id="desktop-sidebar-lines">
        <div class="line line-01 <?php if($target_index == 0) { echo 'selected'; } ?>"></div>
        <div class="line line-02 <?php if($target_index == 1) { echo 'selected'; } ?>"></div>
        <div class="line line-03 <?php if($target_index == 2) { echo 'selected'; } ?>"></div>
      </div>

      <div id="desktop-sidebar-menu">
        <nav>
          <ul>

            <li>
              <a href="profile.php" 
                class="link link-01 <?php if($target_index == 0) { echo 'selected'; } ?>">Who We Are
              </a>
            </li>
            <li>
              <a href="transaction-index.php" 
                class="link link-02 <?php if($target_index == 1) { echo 'selected'; } ?>">Our expertise
              </a>
            </li>
            <li>
              <a href="people-index.php" 
                class="link link-03 <?php if($target_index == 2) { echo 'selected'; } ?>">Our people
              </a>
            </li>

          </ul>
        </nav>
      </div>
    </aside> <!-- desktop-sidebar -->

  <?php endif; ?>

