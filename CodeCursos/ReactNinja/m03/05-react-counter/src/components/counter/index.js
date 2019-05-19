import React, { PureComponent } from 'react'
import Counter from './counter'

class CounterContainer extends PureComponent {
  constructor() {
    super()
    this.state = {
      counter: 0
    }

    this.increment = () => {
      const counterState = this.state.counter
      this.setState({ counter: counterState + 1 })
    }
    this.decrement = () => {
      const counterState = this.state.counter
      this.setState({ counter: counterState - 1 })
    }
  }
  render() {
    const { counter } = this.state
    return (
      <Counter
        counter={ counter }
        increment={ this.increment }
        decrement={ this.decrement }
      />
    )
  }
}

export default CounterContainer;