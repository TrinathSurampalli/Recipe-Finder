# Recipe Finder

## Known Bugs

1. Dark mode toggle does not persist theme (LocalStorage)

- Description: The dark mode toggle does not save the selected theme to `localStorage`. If a user enables dark mode and then refreshes the page, the site resets to light mode while the toggle control still displays the dark mode position.
- Steps to reproduce:
  1.  Open the app and enable dark mode using the toggle.
  2.  Refresh the browser window.
  3.  Observe the page theme and the toggle position.
- Expected behavior: The selected theme should be saved to `localStorage` and applied on page load so the UI theme and toggle position remain in sync.
- Actual behavior: The page falls back to light mode on refresh, but the toggle still shows dark mode.

2. Single search result causes recipe card to overflow horizontally

- Description: When a search returns exactly one recipe, the recipe card stretches and covers the entire viewport horizontally, making the layout look broken.
- Steps to reproduce:
  1.  Enter a search query that returns only one recipe.
  2.  Observe the recipe card alignment and width.
- Expected behavior: The single recipe card should be centered or constrained to the same max-width as multiple cards and not overflow the viewport.
- Actual behavior: The card expands to fill the width, overflowing or covering the full horizontal space.

## Notes

- These two issues are resolved in my sample React movie website project `Movie-Website`. See the Movie project for reference and a working example of theme persistence and responsive card layout: [projects/React Projects/Movies/README.md](projects/React%20Projects/Movies/README.md#L1).
- If you want, I can open the relevant files in this repo and add fixes that match the Movie-Website implementation.

