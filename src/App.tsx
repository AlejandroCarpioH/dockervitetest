
import './App.css'
import { Page } from './Page'
interface model1 {
  id: '1'
  name: string
}
interface model2 {
  id: '2'
  name: string
}



interface data {
  valores: model1 | model2
}
function App() {


  const valores: data = {
    valores: {
      id: "1",
      name: "alejandro"
    }
  }

  return (

    <>
      <Page />
      {valores.valores.name}
    </>
  )
}

export default App
