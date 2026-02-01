import { useState } from 'react'
import './App.css'

function App() {
  // Declarative approach: use state to track whether text should be highlighted
  
  const [isHighlighted, setIsHighlighted] = useState(false) // React automatically updates the DOM when state changes

  
  const handleToggle = () => {
    setIsHighlighted(!isHighlighted) // Event handler to toggle the highlight state
  }

  return (
    <div className="app-container">
      <h1>Declarative Implementation with React</h1>
      
      {/* Button triggers state change */}
      <button onClick={handleToggle}>
        Toggle Highlight
      </button>

      {/* React re-renders this component when state changes */}
      <p className={isHighlighted ? 'highlight' : ''}>
        Съешь ещё этих мягких французских булок, да выпей же чаю.
      </p>
      <p>
        This is a sample paragraph that will be highlighted when you click the button above. 
        Click again to remove the highlight. This demonstrates declarative UI with React - 
        we describe what the UI should look like based on state, and React handles the DOM updates.
      </p>
    </div>
  )
}

export default App