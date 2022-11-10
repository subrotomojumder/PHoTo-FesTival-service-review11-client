export const setAuthToken = (user) => {
    fetch('http://localhost:5000/jwt', {
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