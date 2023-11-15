import axiosSecure from ".";

// save user data in data base
export const saveUser = async (user) => {
    const currentuser = {
        email: user.email, 
        role: 'admin', 
        status: 'Verified'
    }

    const {data} = await axiosSecure.put(`/users/${user.email}`, currentuser)
    return data; 
}


// get token from server 
export const getToken = async (email) => {
    const {data} = await axiosSecure.post('/jwt', email)
    console.log("token resive from database", data);
    return data; 
}