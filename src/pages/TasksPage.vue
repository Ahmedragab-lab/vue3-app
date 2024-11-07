<template>
  	<section class="about" id="about">
			<div class="container">
				<div class="row">
				
					<div class="about-content col-sm-8 col-xs-12 text-left">
						<h3 class="sec-heading text-capitalize main-color" >The best coffee for you</h3>
						<h2>Cafe House</h2>
						<p>hello</p>
						<div class="main-btn"><a class="main-color" href="#" >Read More</a></div>
					</div>
					
					<div class="col-sm-4 col-xs-12">
						<div class="about-img text-center">
							<div class="img-tableau">
								<img class="img-responsive img-circle" src="../../assets/images/about/about.jpg" alt="about image" style="width: 220px; height: 220px;" />
							</div>
						</div>
					</div>
          <br>
          <hr>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Task Name</th>
                <th scope="col">Task priority</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(task, index) in tasks" :key="task.id">
                <td>{{ index + 1 }}</td>
                <td>{{ task.name }}</td>
                <td>{{ task.priority }}</td>
              </tr>
            </tbody>
          </table>
				
				</div><!-- ./row -->
			</div><!-- ./container -->
		</section><!-- ./about -->
 
</template>

<script setup>
      import { onMounted,ref } from "vue";
      import {alltasks} from "../http/task-api"
      const tasks = ref([])

      onMounted(async () => {
        const {data} = await alltasks()
        console.log(data);
        tasks.value = data.data
      })
</script>

<style>

</style>