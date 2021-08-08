import React from 'react'
import '@/assets/App.css'
import { Provider } from 'react-redux'
import store from './store/index.js'
import StudyRedux from './views/study/index.jsx'
import Counter from './views/study/Counter.jsx'
import LayoutPage from './views/LayoutPage';
function App() {
  return (
    < >
        <LayoutPage />
    </>
  )
}

export default App
