import axios from 'axios';

export const signIn = (email,password) => {
    return(
    axios({
        method: 'POST',
        headers: {'Access-Control-Allow-Origin' : '*'},
        url: `${process.env.REACT_APP_API}/signin`,
        data: { email, password }
    })
    )
};

export const signUp = ( name,email,password) => {
    return (
    axios({
        method: 'POST',
        url: `${process.env.REACT_APP_API}/signup`,
        data: { name, email, password }
    })
    )
};

export const getUser = () => {
    return (
    axios({
        method: 'GET',
        url: `${process.env.REACT_APP_API}/getusers`,
    })
    )
};
export const getPost = () => {
    return (
    axios({
        method: 'GET',
        url: `${process.env.REACT_APP_API}/getposts`,
    })
    )
};
export const finduser = (_id,user_cookie) => {
    return (
    axios({
        method: 'POST',
        headers: {token : user_cookie},
        url: `${process.env.REACT_APP_API}/findme`,
        data: { _id }
    })
    )
};
export const forgotuser = (email) => {
    return (
    axios({
        method: 'PUT',
        url: `${process.env.REACT_APP_API}/forgot-password`,
        data: { email }
    })
    )
};
export const resetuser = (newPassword,token) => {
    return (
    axios({
        method: 'PUT',
        url: `${process.env.REACT_APP_API}/reset-password`,
        data: { newPassword, resetPasswordLink: token }
    })
    )
};