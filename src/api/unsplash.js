import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization:
        'Client-ID YLGdm87PVYeRPCH3757SICmXYwEjl-RMMLt3meAJkAk'
    }
});