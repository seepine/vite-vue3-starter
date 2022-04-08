import { defineStore } from 'pinia'
import { UserState } from './types'

// eslint-disable-next-line import/prefer-default-export
export const useUserStore = defineStore('user', {
  state: (): UserState => ({
    fullName: 'zhangsan',
    purePhone: '15080000000'
  }),

  getters: {
    phone(state: UserState): any {
      return `+86${state.purePhone}`
    }
  },

  actions: {
    // Set user's information
    setFullName(name: string) {
      this.fullName = name
      // this.name,this.avatar
      // const res = await getUserInfo()
      // this.setInfo(res.data)
    }

    // Login
    // async login(info: UserState) {
    // const res = await userLogin(loginForm)
    // setToken(res.data.token)
    // res
    // }
  }
})
