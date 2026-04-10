/**
 * Birthday picker — DOM wiring for website.html
 *
 * - Listens to each range input and copies its value into the matching *Display element.
 * - On Submit, builds a Date from year/month/day and writes a human-readable string to #result.
 *
 * If you change ids in the HTML, update the strings passed to getElementById below.
 */

// ---------------------------------------------------------------------------
// Output area (submit handler writes here)
// ---------------------------------------------------------------------------
const result = document.getElementById("result");

// ---------------------------------------------------------------------------
// Year: slider #year ↔ label #yearDisplay
// ---------------------------------------------------------------------------
const yearSlider = document.getElementById("year");
yearSlider.value = 1996;
const yearDisplay = document.getElementById("yearDisplay");
yearSlider.addEventListener("input", () => {
    yearDisplay.textContent = yearSlider.value;
});

// ---------------------------------------------------------------------------
// Month: slider #month ↔ label #monthDisplay
// (Slider min/max are deliberately extreme for the “bad UI” joke; values are not clamped to 1–12.)
// ---------------------------------------------------------------------------
const monthSlider = document.getElementById("month");
monthSlider.value = 1996;
const monthDisplay = document.getElementById("monthDisplay");
monthSlider.addEventListener("input", () => {
    monthDisplay.textContent = monthSlider.value;
});

// ---------------------------------------------------------------------------
// Day: slider #day ↔ label #dayDisplay
// ---------------------------------------------------------------------------
const daySlider = document.getElementById("day");
daySlider.value = 1996;
const dayDisplay = document.getElementById("dayDisplay");
daySlider.addEventListener("input", () => {
    dayDisplay.textContent = daySlider.value;
});

// ---------------------------------------------------------------------------
// Submit: combine parts into Date, then format for #result
// ---------------------------------------------------------------------------
const submitButton = document.getElementById("submit");
submitButton.addEventListener("click", () => {
    // Range inputs give strings; coerce for Date.
    const year = Number(yearSlider.value);
    // JS Date months are 0-based (0 = January), so subtract 1 from the “month” slider value.
    const month = Number(monthSlider.value) - 1;
    const day = Number(daySlider.value);

    const birthday = new Date(year, month, day);
    result.textContent =
        "Your birthday is " +
        birthday.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
});
