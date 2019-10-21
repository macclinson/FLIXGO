import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `
  <header class="header">
    <div class="header__wrap">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="header__content">
              <!-- header logo -->
              <a href="index.html" class="header__logo">
                <img src="./assets/images/logo.svg" alt="">
              </a>
              <!-- end header logo -->

              <!-- header nav -->
              <ul class="header__nav">
              <li class="header__nav-item"><a class='header__nav-link' routerLinkActive='active' [routerLink]="['/movies']">Home</a></li>
              <li class="header__nav-item"><a class='header__nav-link' routerLinkActive='active' [routerLink]="['/favourites']">My Favourites</a></li>
              </ul>
              <!-- end header nav -->

              <!-- header auth -->
              <div class="header__auth">
              </div>
              <!-- end header auth -->

              <!-- header menu btn -->
              <button class="header__btn" type="button">
                <span></span>
                <span></span>
                <span></span>
              </button>
              <!-- end header menu btn -->
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- header search -->
    <form action="#" class="header__search">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="header__search-content">
              <input type="text" placeholder="Search for a movie, TV Series that you are looking for">

              <button type="button">search</button>
            </div>
          </div>
        </div>
      </div>
    </form>
    <!-- end header search -->
  </header>

    <div class='container'>
      <router-outlet></router-outlet>
    </div>

  <footer class="footer">
  <div class="container">
    <div class="row">
      <!-- footer copyright -->
      <div class="col-12">
        <div class="footer__copyright">
          <small>
          <a href="index.html" class="footer__logo">
            <img src="./assets/images/logo.svg" alt="">
          </a>
          </small>

          <ul>
            <li><a href="#">Terms of Use</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
      <!-- end footer copyright -->
    </div>
  </div>
</footer>

    `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle = 'FLIXGO';
}
