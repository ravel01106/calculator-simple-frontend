//import React from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <div className='main-container'>
      <div className='calculator-container'>
        <div className='screen'></div>
        <table className='container-buttons'>
          <tr className="buttons">
            <td><button>C</button></td>
            <td><button>/</button></td>
            <td><button>*</button></td>
            <td><button>-</button></td>
          </tr>
          <tr className="buttons">
            <td><button>7</button></td>
            <td><button>8</button></td>
            <td><button>9</button></td>
            <td rowSpan={2} className='button-row'><button>+</button></td>
          </tr>
          <tr className="buttons">
            <td><button>6</button></td>
            <td><button>5</button></td>
            <td><button>4</button></td>
          </tr>
          <tr className="buttons">
            <td><button>3</button></td>
            <td><button>2</button></td>
            <td><button>1</button></td>
            <td rowSpan={2} className='button-row'><button>=</button></td>
          </tr>
          <tr className="buttons">
            <td colSpan={2} className='button-col'><button>0</button></td>
            <td><button>.</button></td>
            
          </tr>
        </table>
      </div>
      
    </div>
  )
}

export default App
