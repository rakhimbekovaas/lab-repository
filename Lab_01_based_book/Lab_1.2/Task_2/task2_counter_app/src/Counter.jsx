import { useState } from 'react'
import './Counter.css'

/**
 * Counter Component
 * Demonstrates React as the view layer - state drives UI updates
 * Uses useState hook to manage counter value
 */
function Counter() {
  // State hook: holds the current counter value

  const [count, setCount] = useState(0)   // Initial value is 0

  // Event handler to increment counter

  const handleIncrement = () => {
    setCount(count + 1)   // Calling setCount triggers a re-render
  }

  // Event handler to decrement counter

  const handleDecrement = () => {
    setCount(count - 1)   // Updates state, causing React to re-render the component
  }

  return (
    <div className="counter-container">
      <h2>Counter Component</h2>
      
      {/* Display current count value from state */}
      <div className="count-display">
        <span className="count-value">{count}</span>
      </div>
      
      {/* Buttons update state, which triggers re-render */}
      <div className="button-group">
        <button onClick={handleDecrement} className="decrement-btn">
          Decrement
        </button>
        <button onClick={handleIncrement} className="increment-btn">
          Increment
        </button>
      </div>
    </div>
  )
}

export default Counter