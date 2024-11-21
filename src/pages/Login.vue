<template>

    <section class="contact-us">
			<div class="container">
				<div class="row">
					<div class="col-md-8 col-xs-12">
						{{ form }}
						{{ errors }}
						<form  @submit.prevent="handelSubmit">
							<h3>Sign In</h3>
							<input class="field form-control input-lg " 
							      :class="{ 'is-invalid': errors.email && errors.email[0] }"
								   type="email" 
							       placeholder="EMAIL" data-hold="EMAIL" 
								   name="email" v-model="form.email" />
							<div class="invalid-feedback" 
							     v-if="errors.email && errors.email[0]">
								 {{ errors.email && errors.email[0] }}
							</div>
							<input class="password field form-control input-lg" 
							       :class="{ 'is-invalid': errors.password && errors.password[0] }"
							       type="password" 
									placeholder="PASSWORD" 
									data-hold="PASSWORD" minlength="6" maxlength="16" 
									name="password" v-model="form.password" />
							<div class="invalid-feedback" 
							     v-if="errors.password && errors.password[0]">
								 {{ errors.password && errors.password[0] }}
							</div>
							<i class="eye-show fa fa-eye" style="top: 148px;"></i>
							<i class="fa fa-eye-slash"></i>
							<input class="main-btn" value="Login" type="submit"  />
						</form>
					</div>
				</div>
			</div>
		</section>
</template>

<script setup>
   import {reactive} from 'vue'
   import { storeToRefs } from 'pinia';
   import { useRouter} from "vue-router"
   import { useAuthStore } from "../stores/auth";
   const router = useRouter()
   const store = useAuthStore()
   const { isLoggedIn, errors } = storeToRefs(store)
   const { handelLogin } = store
   const form = reactive({
	   email: '',
	   password: ''
   })
   const handelSubmit = async () => {
	    await handelLogin(form)
		if(isLoggedIn.value){
			router.push({name:'tasks'})
		}

   }
</script>

