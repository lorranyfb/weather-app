function clickButton(evt) {
  evt.preventDefault();
    var input = document.querySelector(".input-search").value;
    console.log(input)

    axios.get(`http://dataservice.accuweather.com/locations/v1/cities/search/?apikey=hdzcKMllZ4iOQzAg8NjbNb8kt7EYfBbW&q=${input}`)
        .then((response) => {
            console.log(response)
        })
        .catch((error) => {
            console.error(error);
        })
    }
