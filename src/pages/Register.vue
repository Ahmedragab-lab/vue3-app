<template>

    <section class="contact-us">
			<div class="container">
				<div class="row">
					<div class="col-md-8 col-xs-12">
						{{ form }}
						{{ errors }}
						<form  @submit.prevent="handelSubmit">
							<h3>Sign Up</h3>
							<div>
								<input class="field form-control input-lg " 
									:class="{ 'is-invalid': errors.name && errors.name[0] }"
									type="text" 
									placeholder="Name" data-hold="Name" 
									name="name" v-model="form.name" />
								<div class="invalid-feedback" 
									v-if="errors.name && errors.name[0]">
									{{ errors.name && errors.name[0] }}
								</div>
							</div>
							<div>
								<input class="field form-control input-lg " 
									:class="{ 'is-invalid': errors.email && errors.email[0] }"
									type="email" 
									placeholder="EMAIL" data-hold="EMAIL" 
									name="email" v-model="form.email" />
								<div class="invalid-feedback" 
									v-if="errors.email && errors.email[0]">
									{{ errors.email && errors.email[0] }}
								</div>
							</div>
							<div>
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
							</div>
							<div>
								<input class="password field form-control input-lg" 
									type="password" 
									placeholder="PASSWORD Confirmation" 
									data-hold="PASSWORDConfirmation" minlength="6" maxlength="16" 
									v-model="form.password_confirmation" />
							</div>
							<input class="main-btn" value="Sign Up" type="submit"  />
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
   const { handleRegister } = store
   const form = reactive({
	   name: '',
	   email: '',
	   password: '',
	   password_confirmation: ''
   })
   const handelSubmit = async () => {
	    await handleRegister(form)
		if(isLoggedIn.value){
			router.push({name:'tasks'})
		}

   }
</script>



