import { getJsonData } from './fetchService'; 

interface UserData {
    id: number;
    name: string;
    email: string;
    // ... other user fields
}

async function fetchUserData() {
    try {
        const url = 'https://example.com/api/users'; 
        const userData = await getJsonData<UserData[]>(url);
        console.log('User Data:', userData);
        // Process and display the user data as needed
    } catch (error) {
        console.error('Error fetching user data:', error);
    }
}

// Call this function where you need to fetch the user data
fetchUserData();