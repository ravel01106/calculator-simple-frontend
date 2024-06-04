import style from "./ContainerButtons.module.css"

function ContainerButtons() {
  return (
    <table className={`${style.containerButtons}`}>
    <tr className={`${style.buttons}`}>
      <td><button>C</button></td>
      <td><button>/</button></td>
      <td><button>*</button></td>
      <td><button>-</button></td>
    </tr>
    <tr className={`${style.buttons}`}>
      <td><button>7</button></td>
      <td><button>8</button></td>
      <td><button>9</button></td>
      <td rowSpan={2} className={`${style.buttonRow}`}><button>+</button></td>
    </tr>
    <tr className={`${style.buttons}`}>
      <td><button>6</button></td>
      <td><button>5</button></td>
      <td><button>4</button></td>
    </tr>
    <tr className={`${style.buttons}`}>
      <td><button>3</button></td>
      <td><button>2</button></td>
      <td><button>1</button></td>
      <td rowSpan={2} className={`${style.buttonRow}`}><button>=</button></td>
    </tr>
    <tr className={`${style.buttons}`}>
      <td colSpan={2} className={`${style.buttonCol}`}><button>0</button></td>
      <td><button>.</button></td>
      
    </tr>
  </table>
  )
}

export default ContainerButtons