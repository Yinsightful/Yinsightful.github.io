import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import WaitlistLandingPage from './waitlistPage.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WaitlistLandingPage />
  </StrictMode>,
)
