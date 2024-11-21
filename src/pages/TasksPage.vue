<template>
  	<section class="about" id="about">
			<div class="container">
				<div class="row">
				
					<div class="about-content col-sm-12 col-xs-12 text-left">
						<h3 class="sec-heading text-capitalize main-color" >The best coffee for you</h3>
						<h2>Cafe House Tasks</h2>
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
					</div>
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