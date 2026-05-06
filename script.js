 let currentJoke = "";

    async function getJoke() {
      const loader = document.getElementById("loader");
      loader.innerText = "Loading...";

      document.getElementById("punchline").classList.remove("show");

      try {
        const res = await fetch("https://api.freeapi.app/api/v1/public/randomjokes");
        const json = await res.json();

        const joke = json.data;

        currentJoke = joke.setup + " " + joke.punchline;

        document.getElementById("setup").innerText = joke.setup;
        document.getElementById("punchline").innerText = joke.punchline;

        loader.innerText = "";
      } catch (err) {
        loader.innerText = "Failed to load";
      }
    }

    function togglePunchline() {
      const p = document.getElementById("punchline");
      p.classList.toggle("show");
    }

    function copyJoke() {
      navigator.clipboard.writeText(currentJoke);
      alert("Copied!");
    }

    getJoke();