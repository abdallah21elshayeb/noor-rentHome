import { defineStore } from 'pinia'
import { loginDataStore } from '../auth/login'
// import Swal from 'sweetalert2/dist/sweetalert2.js'

export const adminRolesStore = defineStore('adminRoles', {
  state: () => ({
    requestsData: []
  }),

  actions: {
    async getAllProperties() {
      const tokenData = loginDataStore()
      const token = tokenData.token
      let url = 'https://noor-rent-home.cyclic.app//noor-admin/all-properties'
      try {
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json; charset=utf-8',
            'noor-home-auth-token': token
          }
        })
        const responseAdminData = await response.json()
        this.requestsData = responseAdminData
      } catch (error) {
        console.error(error)
      }
    },

    async setDailyProfit(payload) {
      const tokenData = loginDataStore()
      const token = tokenData.token
      let url = 'https://noor-rent-home.cyclic.app//noor-admin/set-daily-profit'
      try {
        const response = await fetch(url, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json; charset=utf-8',
            'noor-home-auth-token': token
          },
          body: JSON.stringify({
            id: payload.id,
            dailyProfit: payload.dailyProfit
          })
        })
        await response.json()
      } catch (error) {
        console.error(error)
      }
    },

    async updateStatus(idProp, statusProp) {
      const tokenData = loginDataStore()
      const token = tokenData.token
      let url = 'https://noor-rent-home.cyclic.app//noor-admin/update-properties-status'
      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json; charset=utf-8',
            'noor-home-auth-token': token
          },
          body: JSON.stringify({
            id: idProp,
            status: statusProp
          })
        })
        await response.json()
      } catch (error) {
        console.error(error)
      }
    }
  }
})
