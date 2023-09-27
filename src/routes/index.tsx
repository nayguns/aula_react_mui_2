import { Routes, Route, Navigate } from 'react-router-dom';

import { useDrawerContext } from '../shared/contexts';
import useEnhancedEffect from "@mui/material/utils/useEnhancedEffect";
import { Dashboard } from "../pages";

export const AppRoutes = () => {
    const { setDrawerOptions } = useDrawerContext();    

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
			<Route path="/pagina-inicial" element={<Dashboard />} />

			<Route path="*" element={<Navigate to="/pagina-inicial" />} />
        </Routes>
    );
}