<template>
  	<!-- Start Preloader --> 
		<div class="preloader" id="loader-wrapper">
			<div id="loader"></div>
		    <div class="loader-section section-left"></div>
			<div class="loader-section section-right"></div>
		</div><!-- /Preloader -->
   <!-- Start Header -->
		<header>
			<div class="container">
				<div class="row">
				
					<div class="col-lg-6 col-md-4 col-xs-8">
						<div class="logo">
							<img src="../../assets/images/header/logo.png" alt="logo" style="width: 32px; height: 41px;" />
							<span class="brand main-color">Cafe House</span>
						</div>
					</div>
					
					
          			<div class=" col-lg-6 col-md-8 col-xs-4">
						<div class="list-wrapper">
							<div class="toggle-btn visible-sm visible-xs"><i class="main-color fa fa-bars"></i></div>
							<ul class="list list-unstyled list-inline text-right text-uppercase"  v-if="store.isLoggedIn">
								

								<li class="list-item " :class="{ active: isActive('/home') }">
									<img class="before-img" src="../../assets/images/header/logo_nav.png" alt="logo" style="width: 26px; height: 33px;" />
								    <router-link :to="{name:'home'}" >Home</router-link>
									<img class="after-img" src="../../assets/images/header/nav-underline.png" alt="active link" style="width: 74px; height: 17px;" />
								</li>
								<!-- <li class="list-item">
									<img class="before-img" src="../../assets/images/header/logo_nav.png" alt="logo" style="width: 26px; height: 33px;" />
								   	<a href="today_special.html" >Today Special</a>
								    <img class="after-img" src="../../assets/images/header/nav-underline.png" alt="active link" style="width: 74px; height: 17px;" />
								</li>
								<li class="list-item">
									<img class="before-img" src="../../assets/images/header/logo_nav.png" alt="logo" style="width: 26px; height: 33px;" />
									<a href="menu.html" >Menu</a>
									<img class="after-img" src="../../assets/images/header/nav-underline.png" alt="active link" style="width: 74px; height: 17px;" />
								</li> -->
								
								<li class="list-item" :class="{ active: isActive('/test') }">
									<img class="before-img" src="../../assets/images/header/logo_nav.png" alt="logo" style="width: 26px; height: 33px;" />
								    <router-link :to="{name:'test'}" >Test</router-link>
								    <img class="after-img" src="../../assets/images/header/nav-underline.png" alt="active link" style="width: 74px; height: 17px;" />
								</li>
								<li class="list-item" :class="{ active: isActive('/contactus') }">
									<img class="before-img" src="../../assets/images/header/logo_nav.png" alt="logo" style="width: 26px; height: 33px;" />
								    <router-link :to="{name:'contactus'}" >Contact</router-link>
								    <img class="after-img" src="../../assets/images/header/nav-underline.png" alt="active link" style="width: 74px; height: 17px;" />
								</li>
								<li class="list-item" :class="{ active: isActive('/tasks') }">
									<img class="before-img" src="../../assets/images/header/logo_nav.png" alt="logo" style="width: 26px; height: 33px;" />
								    <router-link :to="{name:'tasks'}" >Tasks</router-link>
								    <img class="after-img" src="../../assets/images/header/nav-underline.png" alt="active link" style="width: 74px; height: 17px;" />
								</li>
							</ul>
							<ul class="list list-unstyled list-inline text-right text-uppercase">
								<template v-if="!store.isLoggedIn">
									<li class="list-item" :class="{ active: isActive('/login') }">
										<img class="before-img" src="../../assets/images/header/logo_nav.png" alt="logo" style="width: 26px; height: 33px;" />
										<router-link :to="{name:'login'}" >Log in</router-link>
										<img class="after-img" src="../../assets/images/header/nav-underline.png" alt="active link" style="width: 74px; height: 17px;" />
									</li>
									<li class="list-item" :class="{ active: isActive('/register') }">
										<img class="before-img" src="../../assets/images/header/logo_nav.png" alt="logo" style="width: 26px; height: 33px;" />
										<router-link :to="{name:'register'}" >Register</router-link>
										<img class="after-img" src="../../assets/images/header/nav-underline.png" alt="active link" style="width: 74px; height: 17px;" />
									</li>
								</template>
								<template v-else>
									<li class="list-item nav-item dropdown">
										<a class="nav-link dropdown-toggle " :class="toggleClass" @click.prevent="toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
											{{ store.user.name }}
										</a>
										<ul class="dropdown-menu dropdown-menu-dark " :class="toggleClass" aria-labelledby="navbarDarkDropdownMenuLink">
											<li>
												<a href="#" class="dropdown-item " @click.prevent="logout">
													logout
										        </a>
											</li>
										</ul>
									</li>
								</template>
							</ul>
						</div>
					</div>
				
				</div><!-- ./row -->
			</div><!-- ./container -->
		</header> <!-- /header -->

    
</template>

<script setup>
		import { ref,computed} from "vue";
		import { useRouter } from "vue-router";
        import { useAuthStore } from "../stores/auth";

		const router = useRouter();
		const store = useAuthStore();
		const isOpen = ref(false)

		const logout = async () => {
			await store.handelLogout()
			isOpen.value = false
			router.push({name:'login'})
		}

		const toggle = () => isOpen.value = !isOpen.value
		const toggleClass = computed(() => isOpen.value ? 'show': '')
		

		const isActive = (route) => {
			return router.currentRoute.value.path === route
		}
	// export default {
	// 	name: 'NavigationMenu',
	// 	methods: {
	// 		isActive(route) {
	// 		return this.$route.path === route;
	// 		},
	// 	},
	// };
</script>