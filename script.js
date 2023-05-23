// HTTP REQUEST
// not this https://google.com
// WEBSITE FOR HUMANS https://news.ycombinator.com/news
// API FOR PROGRAMS http://hn.algolia.com/api/v1/search?query=berlin

// aidan selector for UL tag
let ourUl = document.querySelector("div");
// Kreuzberg
const lat = 52.498604;
const lon = 13.391799;
fetch(
  "https://www.7timer.info/bin/astro.php?lon=" +
    lon +
    "&lat=" +
    lat +
    "&ac=0&unit=metric&output=json&tzshift=0"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    // make the boxes bigger
    // start bar from bottom of screen not top
    // make them full width of screen
    const listItems = data.dataseries
      .map((item) => {
        return `
                <div
                    style="display: flex;justify-content:center; align-self: flex-end;align-items: flex-end;width: 5vw; height: ${
                      item.temp2m
                    }%; background: hsl(${item.temp2m * 4} 80% 40%)"
                >${item.temp2m}</div>
            `;
      })
      .join("");
    console.log(listItems);
    ourUl.innerHTML = listItems;
  });
