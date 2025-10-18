import { useContext } from 'react';
import { AppContext } from '../content/AppContent';

export function useVideos() {
    const context = useContext(AppContext); 
    return context;
}