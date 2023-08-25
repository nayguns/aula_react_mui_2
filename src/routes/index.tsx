import { Button } from "@mui/material";
import { Routes, Route, Navigate } from 'react-router-dom';

import { useDrawerContext } from '../shared/contexts';
import useEnhancedEffect from "@mui/material/utils/useEnhancedEffect";

export const AppRoutes = () => {
    const { toggleDrawerOpen, setDrawerOptions } = useDrawerContext();    

    useEnhancedEffect(() => {
        setDrawerOptions([
            {
                icon: 'home',
                path: '/pagina-inicial',
                label: 'Página-inicial',
            },
        ]);
    }, []);

    return (
        <Routes>
			<Route path="/pagina-inicial" element={<Button variant='contained' color='primary' onClick={toggleDrawerOpen}>Toggle Drawer</Button>} />

			<Route path="*" element={<Navigate to="/pagina-inicial" />} />
        </Routes>
    );
}