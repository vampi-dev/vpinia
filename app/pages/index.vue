<script setup>
import { ref } from 'vue'
import { useTaskStore } from '~/stores/task'

const taskStore = useTaskStore()
const newTask = ref('')
</script>

<template>
  <div>
    <h1>Pinia Task Manager</h1>

    <form @submit.prevent="taskStore.addTask(newTask); newTask = ''">
      <input v-model="newTask" placeholder="Enter a task" />
      <button type="submit">Add Task</button>
    </form>

    <h2>All Tasks</h2>

    <p v-if="taskStore.tasks.length === 0">No tasks added.</p>

    <ul>
      <li v-for="task in taskStore.tasks" :key="task.id">
        <span :style="{ textDecoration: task.completed ? 'line-through' : 'none' }">
          {{ task.title }}
        </span>

        <button @click="taskStore.toggleTask(task.id)">
          {{ task.completed ? 'Undo' : 'Complete' }}
        </button>

        <button @click="taskStore.deleteTask(task.id)">Delete</button>
      </li>
    </ul>

    <h3>Completed: {{ taskStore.completedTasks.length }}</h3>
    <h3>Remaining: {{ taskStore.remainingTasks.length }}</h3>
  </div>
</template>

