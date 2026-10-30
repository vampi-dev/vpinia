import { defineStore } from 'pinia'

export const useTaskStore = defineStore('task', {
  // State stores the data
  state: () => ({
    tasks: []
  }),

  // Getters return calculated data
  getters: {
    completedTasks: (state) => {
      return state.tasks.filter(task => task.completed)
    },

    remainingTasks: (state) => {
      return state.tasks.filter(task => !task.completed)
    }
  },

  // Actions change the state
  actions: {
    addTask(title) {
      if (!title.trim()) return

      this.tasks.push({
        id: Date.now(),
        title: title,
        completed: false
      })
    },

    toggleTask(id) {
      const task = this.tasks.find(task => task.id === id)

      if (task) {
        task.completed = !task.completed
      }
    },

    deleteTask(id) {
      this.tasks = this.tasks.filter(task => task.id !== id)
    }
  }
})

