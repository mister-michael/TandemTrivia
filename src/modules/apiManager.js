const apiURL = "http://localhost:8080/trivia"

export default {
    get() {
        return fetch(apiURL).then(resp => resp.json())
    }
}