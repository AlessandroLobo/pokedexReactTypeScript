import { Routes, Route } from 'react-router-dom';
import App from './App';


const AppRouter = () => (
    <Routes>
        <Route path="*" element={<div>404</div>} />
        <Route path="/" element={<App />} />
        <Route path="/teste" element={<div>Isso é um teste</div>} />
    </Routes>
);

export default AppRouter;