const server_url = process.env.SERVER_URL || 'https://rich-minion-server.onrender.com/'
const local_url = process.env.LOCAL_URL || 'http://localhost:3000/'

export const imagesLink = {
    SERVER: server_url,
    LOCAL: local_url + 'images/'
}