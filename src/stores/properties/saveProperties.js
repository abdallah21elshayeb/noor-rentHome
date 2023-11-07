import { defineStore } from 'pinia'
import { loginDataStore } from '../auth/login'
import Swal from 'sweetalert2/dist/sweetalert2.js'
// import { router } from '../../router/index.js'
export const savePropertiesStore = defineStore('saveProperties', {
  state: () => ({
    okayResponse: false,
    getPropertiesDataResponse: []
  }),

  getters: {},
  actions: {
    async saveProperties(payload) {
      const tokenData = loginDataStore()
      const token = tokenData.token
      let url = 'https://noor-rent-home.cyclic.app//noor/save-properties'
      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json; charset=utf-8',
            
            'noor-home-auth-token': token
          },
          body: JSON.stringify({
            fullName: payload.fullName,
            email: payload.email,
            phone: payload.phone,
            location: payload.location,
            description: payload.description,
            price: payload.price,
            images: payload.images,
            rentalPeriod: payload.rentalPeriod,
            message: payload.message
          })
        })
        const responseData = await response.json()
        
        if (!response.ok) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: responseData.error
          })
        } else {
          Swal.fire({
            icon: 'success',
            title: responseData.msg,
            showConfirmButton: false,
            timer: 2000
          })
          this.okayResponse = true
        }
      } catch (error) {
        console.error(error)
      }
    },

    async getProperties() {
      const tokenData = loginDataStore()
      const token = tokenData.token
      let url = 'https://noor-rent-home.cyclic.app//noor/my-properties'
      try {
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json; charset=utf-8',
            'noor-home-auth-token': token
          }
        })

        const responseData = await response.json()
        this.getPropertiesDataResponse = responseData;
      } catch (error) {
        console.error(error)
      }
    }
  }
})
