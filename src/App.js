import { BrowserRouter } from 'react-router-dom';
import AuthContext from './contexts/AuthContext';
import ProductsContext from './contexts/ProductsContext';
import AppRoutes from './routes';

function App() {
    return (
        <BrowserRouter>
            <AuthContext>
                <ProductsContext>
                    <AppRoutes />
                </ProductsContext>
            </AuthContext>
        </BrowserRouter>
    );
}

export default App;
