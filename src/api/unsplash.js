import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID b05a1505f439f496abda99357cba3b7453e7bc6a3b50484add3878c2f89c5372'
    },
})