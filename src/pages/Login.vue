<template>

    <section class="contact-us">
			<div class="container">
				<div class="row">
					<div class="col-md-8 col-xs-12">
						<form  method="post">
							<h3>Sign In</h3>
							<input class="field form-control input-lg" type="email" placeholder="EMAIL" data-hold="EMAIL" name="email" required />
							<input class="password field form-control input-lg" type="password" 
									placeholder="PASSWORD" data-hold="PASSWORD" minlength="8" maxlength="16" 
									name="password" required />
							<i class="eye-show fa fa-eye" style="top: 148px;"></i>
							<i class="fa fa-eye-slash"></i>
							<input class="main-btn" value="Login" type="submit" @click="handelClick" />
						</form>
					</div>
				</div>
			</div>
		</section>
</template>

<script setup>

   import { useRouter} from "vue-router"
   const router = useRouter()
   const handelClick = () => {
		console.log('click');
		router.push({name:'tasks'})
   }
</script>

