import { defineStore } from 'pinia'
import Swal from 'sweetalert2/dist/sweetalert2.js'
export const loginDataStore = defineStore('logIn', {
  state: () => ({
    user: null,
    token: null,
    didAutoLogouts: false,
    noPath: false,
    userInfo: [],
    firstLetter: ''
  }),

  getters: {
    userId(state) {
      return state.userId
    },
    userName(state) {
      return state.userInfo.name
    },
    userType(state) {
      return state.userInfo.type
    },
    userName1stLetter(state) {
      return state.firstLetter
    },
    isAuthenticated(state) {
      return !!state.token
    },
    // didAutoLogout(state) {
    //   return state.didAutoLogout
    // }
  },

  actions: {
    async login(payload) {
      let url = 'https://noor-rent-home.cyclic.app//noor/login'
      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: 
            {'Content-Type': 'application/json; charset=utf-8'},
            // { key: 'Access-Control-Allow-Credentials', value: 'true' },
            // { key: 'Access-Control-Allow-Origin', value: '*' },
            // { key: 'Access-Control-Allow-Methods', value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT' },
            // { key: 'Access-Control-Allow-Headers', value: 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization' },
          
          body: JSON.stringify({
            email: payload.email,
            password: payload.password,
            returnSecureToken: true
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
          this.noPath = false
        }
        localStorage.setItem('token', responseData.token)
        // localStorage.setItem('userId', responseData.localId);
        // localStorage.setItem('tokenExpiration', expirationDate);
        this.setUser({
          token: responseData.token
          // userId: responseData.localId,
        })
      } catch (error) {
        this.noPath = true
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error
        })
      }
    },

    async tryLogin() {
      try {
        let token = localStorage.getItem('token')

        const resToken = await fetch('https://noor-rent-home.cyclic.app//isValidToken', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json; charset=utf-8',
            'noor-home-auth-token': token
          }
        })
        const response = await resToken.json()
  
        if (response === true) {
          const userRes = await fetch('https://noor-rent-home.cyclic.app//', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json; charset=utf-8',
              'noor-home-auth-token': token
            }
          })
          const userData = await userRes.json()
          this.userInfo = userData
          this.firstLetter = userData.name[0]
          this.setUser({
            token: userData.token
          })
        }
      } catch (error) {
        console.error(error)
      }
    },
    setUser(payload) {
      this.token = payload.token
    },
    logout() {
      localStorage.removeItem('token')
      // localStorage.removeItem('userId');
      // localStorage.removeItem('tokenExpiration');
      this.setUser({
        token: null
      })
      this.userInfo = []
    }
  }
})
