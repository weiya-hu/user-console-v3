// using ES6 modules

import mitt, { Emitter } from 'mitt'

type IMittEvents = {
  lookImage: { imgs: string[]; index: number }
  lookVideo: string
  [eventName: string]: any
}
const emiter: Emitter<IMittEvents> = mitt()

export default emiter
