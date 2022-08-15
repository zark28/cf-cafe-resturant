class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <footer class="footer-area bg-f">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-6">
              <h3>About Us</h3>
              <p>
                The goal of the founders is to provide reliable source of tasty and affordable foods of various varities for people from all works of life
              </p>
            </div>
            <div class="col-lg-3 col-md-6">
              <h3>Opening hours</h3>
              <p><span class="text-color">Monday: </span>Closed</p>
              <p><span class="text-color">Tue-Wed :</span> 9:Am - 10PM</p>
              <p><span class="text-color">Thu-Fri :</span> 9:Am - 10PM</p>
              <p><span class="text-color">Sat-Sun :</span> 5:PM - 10PM</p>
            </div>
            <div class="col-lg-3 col-md-6">
              <h3>Contact information</h3>
              <p class="lead">Akropong-Akuapem
                old level 400 premises a minute walk from the old council.</p>
              <p class="lead"><a href="#">+233 244 020 570</a></p>
              <p><a href="#"> conceptfoods@gmail.com</a></p>
            </div>
            <div class="col-lg-3 col-md-6">
              <h3>Subscribe</h3>
              <div class="subscribe_form">
                <form class="subscribe_form">
                  <input
                    name="EMAIL"
                    id="subs-email"
                    class="form_input"
                    placeholder="Email Address..."
                    type="email"
                  />
                  <button type="submit" class="submit">SUBSCRIBE</button>
                  <div class="clearfix"></div>
                </form>
              </div>
              <ul class="list-inline f-social">
                <li class="list-inline-item">
                  <a href="#"
                    ><i class="fa fa-facebook" aria-hidden="true"></i
                  ></a>
                </li>
                <li class="list-inline-item">
                  <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                </li>
                <li class="list-inline-item">
                  <a href="#"
                    ><i class="fa fa-linkedin" aria-hidden="true"></i
                  ></a>
                </li>
                <li class="list-inline-item">
                  <a href="#"
                    ><i class="fa fa-google-plus" aria-hidden="true"></i
                  ></a>
                </li>
                <li class="list-inline-item">
                  <a href="#"
                    ><i class="fa fa-instagram" aria-hidden="true"></i
                  ></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
  
        <div class="copyright">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <p class="company-name">
                  All Rights Reserved. &copy; 2022
                  <a href="#">Concept Foods</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
        `;
  }
}
customElements.define('footer-component', Footer);
