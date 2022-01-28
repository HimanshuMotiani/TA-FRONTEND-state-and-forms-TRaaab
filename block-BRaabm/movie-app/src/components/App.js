import Header from './Header';
import Movie from './Movie'
import Sidebar from './Sidebar'
function App() {
    return (
        <>
            <Header />
            <div className="flex">
                <aside className="flex-20">
                 <Sidebar/>
                </aside>
                <div className="flex-75">
                <Movie />
                </div>
            </div>
        </>
    )
}
export default App;