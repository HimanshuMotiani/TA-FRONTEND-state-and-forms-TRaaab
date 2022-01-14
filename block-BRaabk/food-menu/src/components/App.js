import Tags from './Tags'
function App(params) {
  return (
    <>
      <main className="bg-back">
        <header className="text-center p-8">
          <h1 className="text-5xl text-regal">Our Menu</h1>
          <hr className="w-1/12 border-2 inline-block border-secondary"/>
        </header>
        <Tags />
      </main>
    </>
  )
}

export default App