let homeScore = 0
let homescoreEl = document.getElementById("home-score")
let guestScore = 0
let guestscoreEl = document.getElementById("guest-score")

function increasehomescore1() {
    homeScore += 1
    homescoreEl.textContent = homeScore
} 

function increasehomescore2() {
    homeScore += 2
    homescoreEl.textContent = homeScore
} 

function increasehomescore3() {
    homeScore += 3
    homescoreEl.textContent = homeScore
} 

function increaseguestscore1() {
    guestScore += 1
    guestscoreEl.textContent = guestScore
} 

function increaseguestscore2() {
    guestScore += 2
    guestscoreEl.textContent = guestScore
} 

function increaseguestscore3() {
    guestScore += 3
    guestscoreEl.textContent = guestScore
} 