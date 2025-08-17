const url = "https://icanhazdadjoke.com/";
let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
  let joke = await getJokes();
  let p = document.querySelector("#result");
  p.innerText = joke;
});

async function getJokes() {
  try {
    const config = { headers: { Accept: "application/json" } };
    let res = await axios.get(url, config);
    return res.data.joke;
    console.log(res.data.joke);
  } catch (err) {
    console.log("error - ", err);
  }
}
