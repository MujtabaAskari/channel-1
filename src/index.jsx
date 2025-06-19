import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    <App />
)








const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(<>



    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout />} >
                <Route index element={<Home />} />
                <Route path='employee' element={<Employee employee={employees} />} />
                <Route path='product' element={<Product product={products} />} />
                <Route path='company' element={<Company company={companies} />} />
            </Route>
        </Routes>
    </BrowserRouter>

</>








);