const datum: {
  [key: string]: {
    master: Array<string>
    password: string
    db: number
  }
} = {
  default: {
    master: ['0.0.0.0:0000'],
    password: '',
    db: 0,
  },
}

export default datum
