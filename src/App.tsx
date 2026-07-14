import { motion } from 'framer-motion'
import Container from './components/layout/Container'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="min-h-screen bg-background text-text">
      <Navbar />
      <Container>
        <motion.main
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="space-y-20 py-10"
        >
          {/* Section content will be added here */}
        </motion.main>
      </Container>
      <Footer />
    </div>
  )
}

export default App
