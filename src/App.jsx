import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './pages/Home'
import Contenus from './pages/Contenus'
import Conferences from './pages/Conferences'
import Pratique from './pages/Pratique'
import Archives from './pages/Archives'
import Mentions from './pages/Mentions'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contenus" element={<Contenus />} />
        <Route path="/conferences" element={<Conferences />} />
        <Route path="/pratique" element={<Pratique />} />
        <Route path="/archives" element={<Archives />} />
        <Route path="/mentions" element={<Mentions />} />
      </Routes>
    </Layout>
  )
}

export default App
