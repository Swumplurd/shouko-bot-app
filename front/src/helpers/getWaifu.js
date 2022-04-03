export const getWaifu = async() => {
    const url = 'http://localhost:4000/api/user/get-users';
    const httpRequest = await fetch(url);
    const response = await httpRequest.json();
    const {usuarios} = response;

    const users = usuarios.map(usuario => {
        return {
            id: usuario.user_id,
            user: usuario.user,
            user_avatar: usuario.user_avatar,
            waifu: usuario.waifu,
            waifu_history: usuario.waifu_history
        }
    })

    return users;
}