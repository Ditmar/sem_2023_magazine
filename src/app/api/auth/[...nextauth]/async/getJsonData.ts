import { getJsonData } from './fetchService'; 

interface UserData {
    id: number;
    name: string;
    email: string;
}

async function fetchUserData() {
    try {
        const url = `${process.env.REACT_APP_BASE_URL}/api/users` 
        const userData = await getJsonData<UserData[]>(url);
        console.log('User Data:', userData);
    } catch (error) {
        console.error('Error fetching user data:', error);
    }
}

fetchUserData();