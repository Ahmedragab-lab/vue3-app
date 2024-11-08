<template>

    <section class="contact-us">
			<div class="container">
				<div class="row">
		
					<div class="col-md-8 col-xs-12">
						<form action="form-group" method="post">
							<h3>Sign Up</h3>
							<input class="field form-control input-lg" type="text" placeholder="NAME" data-hold="NAME" minlength="8" maxlength="20" name="user-name" required />
							<input class="field form-control input-lg" type="email" placeholder="EMAIL" data-hold="EMAIL" name="email" required />
							<input class="password field form-control input-lg" type="password" 
              placeholder="PASSWORD" data-hold="PASSWORD" minlength="8" maxlength="16" 
              name="password" required />
							<i class="eye-show fa fa-eye"></i>
							<i class="fa fa-eye-slash"></i>
							<input class="main-btn" type="submit" value="Send Message" />
						</form>
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