document.getElementById("MyButton").onclick = function() {
    fetch("https://en6y8zik2gncezv.m.pipedream.net/send_email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer jasdf3jJuisdfaL7safnsfgmiU7124Hn"
        }
      })
};
