<template>
  	<!-- Start Home -->
		<section class="home">
			<div class="container">
				<div class="home-lights">
					<img class="hidden-sm" src="../../assets/images/home/light.png" alt="light" style="width: 284px; height: 288px;" />
					<img class="hidden-xs" src="../../assets/images/home/light.png" alt="light" style="width: 284px; height: 288px;" />
					<img class="hidden-xs" src="../../assets/images/home/light.png" alt="light" style="width: 284px; height: 288px;" />
				</div>
			
				<div class="home-content text-center">
					<h2>Contact Us</h2>
					<h1 class="main-color">Cafe House</h1>
					<p class="lead">Nemo enim ipsam voluptatem quia voluptas sit <br>aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui <br>ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem <br> ipsum quia dolor sit amet, consectetur, adipisci velit.</p>
					<div class="main-btn"><a class="main-color" href="#" >More Details</a></div>
				</div>
				
				<div class="home-table">
					<img class="img-responsive full-width" src="../../assets/images/home/table-set.png" alt="home table" style="width: 989px; height: 523px;" />
				</div>
			</div><!-- ./container -->
		</section><!-- ./home -->
		
		
		<!-- Start Contact us  -->
		<section class="contact-us">
			<div class="container">
				<div class="row">
		
					<div class="col-md-6 col-xs-12">
						<form action="form-group" method="post">
							<h3>Send us a Message</h3>
							<input class="field form-control input-lg" type="text" placeholder="NAME" data-hold="NAME" minlength="8" maxlength="20" name="user-name" required />
							<input class="field form-control input-lg" type="email" placeholder="EMAIL" data-hold="EMAIL" name="email" required />
							<input class="password field form-control input-lg" type="password" placeholder="PASSWORD" data-hold="PASSWORD" minlength="8" maxlength="16" name="password" required />
							<i class="eye-show fa fa-eye"></i>
							<i class="fa fa-eye-slash"></i>
							<textarea class="field form-control" name="message" placeholder="MESSAGE" data-hold="MESSAGE" minlength="15" maxlength="250"></textarea>
							<input class="main-btn" type="submit" value="Send Message" />
						</form>
					</div>
					
					<div class="col-md-6 col-xs-12">
						<div class="location">
						 	<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3647.3030413476204!2d100.5641230193719!3d13.757206847615207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf51ce6427b7918fc!2sG+Tower!5e0!3m2!1sen!2sth!4v1510722015945" style="border:0; height:100%; width:100%" allowfullscreen></iframe>
					 	</div>
					</div>
		
				</div>
			</div><!-- ./container -->
		</section><!-- ./contact us -->
</template>

<script>
export default {

}
</script>

<style>

</style>