import { render } from "react-dom";
import Tags from './Tags'
function App(params) {
  return (
    <>
      <main className="bg-back">
        <header className="text-center p-8">
          <h1 className="text-5xl text-yellow-600">Our Menu</h1>
          <hr className="w-1/12 border-2 inline-block border-black"/>
        </header>
        <Tags />
      </main>
    </>
  )
}

export default App