// Triggered with: curl -X GET https://en5p4qr3jfyinq1.m.pipedream.net/compile_complete\?name\=rumi \
// -H 'Authorization: Bearer jasdf3jJuisdfaL7safnsfgmiU7124Hn'
document.getElementById("MyButton").onclick = function() {
    fetch("https://en5p4qr3jfyinq1.m.pipedream.net/compile_complete", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer jasdf3jJuisdfaL7safnsfgmiU7124Hn"
        }
      })
};