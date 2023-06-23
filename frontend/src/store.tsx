import { create } from 'zustand'

interface jotboardState {
    token: string
}

const jotboardStore = create<jotboardState>()(() => ({
    token: ''
}))

export default jotboardStore