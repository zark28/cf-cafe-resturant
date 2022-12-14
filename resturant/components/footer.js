class Footer extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
        <div class="container">
			<div class="row row-pb-md">
				<div class="col-md-4 fh5co-widget">
					<h4>Concept Foods</h4>
					<p>The Best Coffee & Restaurant in the East</p>
				</div>
				<div class="col-md-2 col-md-push-1 fh5co-widget">
					<h4>Links</h4>
					<ul class="fh5co-footer-links">
						<li><a href="./index.html">Home</a></li>
						<li><a href="./menu/html">Menu</a></li>
						<li><a href="./gallery.html">Gallery</a></li>
					</ul>
				</div>

				<div class="col-md-2 col-md-push-1 fh5co-widget">
					<h4>Working Hours</h4>
					<ul class="fh5co-footer-links">
						<li>Weekdays </li>
						<li>10am to 10pm</li>
						<li><a href="#"></a></li>
						<li><a href="#">Weekends</a></li>
						<li>10am to 10pm</li>
					</ul>
				</div>

				<div class="col-md-4 col-md-push-1 fh5co-widget">
					<h4>Contact Information</h4>
					<ul class="fh5co-footer-links">
						<li>Akropong-Akuapem <br> old level 400 premises a minute walk from the old council.</li>
						<li><a href="tel:0244020570">+233 244 020 570</a></li>
						<li><a href="mailto:conceptfoods@gmail.com">conceptfoods@gmail.com</a></li>
						<li><a href="http://https://">conceptfoods.bar</a></li>
					</ul>
				</div>

			</div>

			<div class="row copyright">
				<div class="col-md-12 text-center">
					<p>
						<small class="block">&copy; 2022 Concept Foods. All Rights Reserved.</small> 
						<!-- <small class="block">Designed by <a href="http://freehtml5.co/" target="_blank">FreeHTML5.co</a> Demo Images: <a href="http://unsplash.co/" target="_blank">Unsplash</a></small> -->
					</p>
					<p>
						<ul class="fh5co-social-icons">
							<li><a href="#"><i class="icon-twitter2"></i></a></li>
							<li><a href="https://web.facebook.com/conceptsfoods/about" target='_blank' ><i class="icon-facebook2"></i></a></li>
							<li><a href="#"><i class="icon-linkedin2"></i></a></li>
							<!-- <li><a href="#"><i class="icon-dribbble2"></i></a></li> -->
						</ul>
					</p>
				</div>
			</div>

		</div>
        `;
  }
}

customElements.define('footer-component', Footer);
