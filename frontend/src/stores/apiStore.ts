import { defineStore } from 'pinia'
import axios from 'axios'

export const useApiStore = defineStore('api', {
  state: () => ({
    message: '',
    loading: false,
    error: null as string | null
  }),
  actions: {
    async fetchMessage() {
      this.loading = true
      this.error = null
      try {
        const response = await axios.get('http://localhost:8080/api/get_data')
        this.message = response.data
      } catch (error) {
        this.error = error instanceof Error ? error.message : 'Unknown error'
      } finally {
        this.loading = false
      }
    }
  }
})