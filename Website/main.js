// Element where the final formatted birthday is displayed
const result = document.getElementById("result");

// Year slider and display setup
const yearSlider = document.getElementById("year");
yearSlider.value = 1996; // starting year value
const yearDisplay = document.getElementById("yearDisplay");
yearSlider.addEventListener("input", () => {
    // Update the visible year text as user moves the slider
    yearDisplay.textContent = yearSlider.value;
});

// Month slider and display setup
const monthSlider = document.getElementById("month");
monthSlider.value = 1996; // starting month value (placeholder from existing UI)
const monthDisplay = document.getElementById("monthDisplay");
monthSlider.addEventListener("input", () => {
    // Update the visible month text as user moves the slider
    monthDisplay.textContent = monthSlider.value;
});

// Day slider and display setup
const daySlider = document.getElementById("day");
daySlider.value = 1996; // starting day value (placeholder from existing UI)
const dayDisplay = document.getElementById("dayDisplay");
daySlider.addEventListener("input", () => {
    // Update the visible day text as user moves the slider
    dayDisplay.textContent = daySlider.value;
});

// Submit button action
const submitButton = document.getElementById("submit");
submitButton.addEventListener("click", () => {
    // Build a Date from slider values and format it for display
    // NOTE: .value returns strings, and month in JS Date is 0-based (0=Jan)
    const year = Number(yearSlider.value);
    const month = Number(monthSlider.value) - 1;
    const day = Number(daySlider.value);

    const birthday = new Date(year, month, day);
    result.textContent = "Your birthday is " + birthday.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
});
