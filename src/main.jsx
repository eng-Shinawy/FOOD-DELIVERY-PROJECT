import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import StoreContextProvider from './Context/StoreContext.jsx'
// Get the root element from your HTML
const rootElement = document.getElementById('root')

// Create a root and render your app
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <BrowserRouter basename="/FOOD-DELIVERY-PROJECT">
      
      <StoreContextProvider>
          <App />
      </StoreContextProvider>
    </BrowserRouter>
  )
} else {
  console.error('Root element not found')
}