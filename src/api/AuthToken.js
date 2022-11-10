export const setAuthToken = (user) => {
    fetch('https://service-review-server-lake.vercel.app/jwt', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({user})
    })
    .then(res => res.json())
    .then(data => {
        localStorage.setItem("review-token", data.token)
    })
}