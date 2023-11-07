import { defineStore } from 'pinia'
import Swal from 'sweetalert2/dist/sweetalert2.js'
export const signUpDataStore = defineStore('signup', {
  state: () => ({
    noPath: false
  }),
  actions: {
    async signup(payload) {
      let url = 'https://noor-rent-home.cyclic.app//noor/signup'
      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json; charset=utf-8'
          },
          body: JSON.stringify({
            name: payload.name,
            address: payload.address,
            email: payload.email,
            password: payload.password
          })
        })
        const responseData = await response.json()
        if (!response.ok) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: responseData.msg
          })
          this.noPath = true
        } else {
          Swal.fire({
            icon: 'success',
            title: responseData.msg,
            showConfirmButton: false,
            timer: 1500
          })
          this.noPath = false
        }
      } catch (error) {
        
        this.noPath = true
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error
        })
      }
    }
  }
})
