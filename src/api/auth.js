import axiosSecure from ".";


export const saveUser = async (user) => {
    const currentuser = {
        email: user.email, 
        role: 'guest', 
        status: 'Verified'
    }

    const {data} = await axiosSecure.put(`/users/${user.email}`, currentuser)
    return data; 
}