import { Snack } from "./models/snack.js"
import { Value } from "./models/Value.js"
import { EventEmitter } from "./utils/EventEmitter.js"
import { isValidProp } from "./utils/isValidProp.js"
import { loadState } from "./utils/Store.js"

class ObservableAppState extends EventEmitter {
  page = ''
  /** @type {import('./models/Value.js').Value[]} */
  values = loadState('values', [Value])

  snacks = [
    new Snack ({name: 'whoppers', picture: 'https://media.istockphoto.com/id/922210842/photo/malt-balls.jpg?s=1024x1024&w=is&k=20&c=_zj0_NP0N6VP2StRw7nEBB1eRSDT3KKAcdg3QVxylHY=', money: 1.25}),
    new Snack ({name: 'starburst', picture: 'https://images.unsplash.com/photo-1534119139482-b530a7f9a98b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80', money: 1.50}),
    new Snack ({name: 'snickers', picture: 'https://media.istockphoto.com/id/953219234/photo/snickers-bar.jpg?s=1024x1024&w=is&k=20&c=lVM7gfu55FpBDaF0xUGV8pe0iYl3wP0xUu2MKRQQ-f8=', money: 1.25}),
    new Snack ({name: 'dots', picture: 'https://media.istockphoto.com/id/512336072/photo/gum-drops.jpg?s=1024x1024&w=is&k=20&c=ZHn2-X5YGvFDNKEz51E3lOk9370kepMX3Z_hGB9rN1I=', money: 1.75}),
    new Snack ({name: 'skittles', picture: 'https://media.istockphoto.com/id/458931897/photo/skittles-candy.jpg?s=1024x1024&w=is&k=20&c=NXqx2FD4uWTyg5NWfWMT5iHs0NVsKRtjpB01rx6gXXM=', money: 1.25}),
    new Snack ({name: 'butterfinger', picture: 'https://media.istockphoto.com/id/458230513/photo/butterfinger-chocolate-candy-bar-unwrapped.jpg?s=1024x1024&w=is&k=20&c=DsUAuRVSTDH5zq5BifUH3Ud3GuYqV10FwDmGBWdgkdc=', money: 1.50}),
  ]

  money = 0

  // NOTE Used to load initial data
  init() {

  }

}

export const AppState = new Proxy(new ObservableAppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
