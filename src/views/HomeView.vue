<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="8" lg="6">
        <v-card>
          
          <v-card-text>
            <v-btn 
              color="primary" 
              @click="fetchMessage" 
              :loading="loading"
              class="mb-4"
            >
              Get data from backend
            </v-btn>
            
            <v-alert v-if="error" type="error" class="mb-4">
              {{ error }}
            </v-alert>
            
            <v-card v-if="message" outlined>
              <v-card-text>
                <p>{{ message }}</p>
              </v-card-text>
            </v-card>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { useApiStore } from '../stores/apiStore'
import { storeToRefs } from 'pinia'

const apiStore = useApiStore()
const { message, loading, error } = storeToRefs(apiStore)
const { fetchMessage } = apiStore
</script>