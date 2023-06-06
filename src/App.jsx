/* eslint-disable no-unused-vars */
import { useRef, useEffect } from 'react'
import Uppy from '@uppy/core'
import Tus from '@uppy/tus'
import { Dashboard } from '@uppy/react'

import '@uppy/core/dist/style.min.css'
import '@uppy/dashboard/dist/style.css'
import './App.css'


function App() {
  const uppyRef = useRef(new Uppy().use(Tus, { endpoint: '-' }))

  useEffect(() => {
    uppyRef.current.on('complete', (result) => {
      console.log(result);
    })
  }, [])

  return (
   <div style={{ height: '100vh' }}>
     {uppyRef.current && <Dashboard uppy={uppyRef.current} />}
   </div>
  )
}

export default App
