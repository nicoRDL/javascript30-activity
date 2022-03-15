const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json'

const  all_locations= []

fetch(endpoint)
  .then(blob => blob.json())
  .then(data => all_locations.push(...data))

function find_loc_Matches(wordToMatch, all_locations) {
  return all_locations.filter(place => {
    const regex = new RegExp(wordToMatch, 'gi')
    return place.city.match(regex) || place.state.match(regex)
  })
}

function displayCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

function show_loc_Matches() {
  const matchArray = find_loc_Matches(this.value, all_locations)
  const html = matchArray.map(place => {
    const regex = new RegExp(this.value, 'gi')
    const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
    const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
    return `
      <li>
        <span class="name">${cityName}, ${stateName}</span>
        <span class="population">${displayCommas(place.population)}</span>
      </li>`
  }).join('')

  suggestions.innerHTML = html
}

const searchInput = document.querySelector('.search')
const suggestions = document.querySelector('.suggestions')

searchInput.addEventListener('change', show_loc_Matches)
searchInput.addEventListener('keyup', show_loc_Matches)