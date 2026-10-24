# Happy Birthday Celebration 🎉

A simple, delightful web page to celebrate someone’s birthday with animations, music, and visuals. Deployable via GitHub Pages.

## Demo

Live site: https://deepbikram.github.io/happy-birthday-celebration/

## Features

- 🎊 Animated birthday greeting
- 🎶 Optional background music (toggle-able)
- 🌟 Confetti/balloon/fireworks-style effects
- 🖼️ Local images from `/img`
- 📱 Responsive design (HTML + CSS + JS only)

## Project Structure
.
├─ index.html        # Main page markup
├─ style.css         # Styles and animations
├─ script.js         # Interactions & effects (e.g., confetti, music controls)
├─ img/              # Images used in the page (cakes, balloons, background, etc.)
└─ music/            # Birthday song or background music (e.g., MP3)


## Getting Started (Local)

1. Clone the repo:
git clone https://github.com/deepbikram/happy-birthday-celebration.git
cd happy-birthday-celebration


## Customization

- Edit text in `index.html` (name, messages, dates).
- Replace images in `/img` (keep filenames or update paths in HTML/CSS).
- Replace/add a track in `/music` and update the `<audio>` source in `index.html`.
- Tweak colors, fonts, and animation timing in `style.css`.
- Adjust effects or add new interactions in `script.js`.

## Deployment (GitHub Pages)

Already deployed via GitHub Pages.
To enable or re-deploy:
1. Push to the `main` branch.
2. In GitHub repo settings → Pages → set Source to `Deploy from a branch`, `main`, `/root`.
3. Wait for the deployment to finish (check the Deployments section).

## Browser Support

Works on modern browsers (Chrome, Edge, Firefox, Safari). Mobile-friendly with basic responsive styles.

## Accessibility Notes

- Provide alt text for images in `index.html`.
- Offer a music toggle and keep audio off by default to respect user preference.
- Ensure sufficient color contrast (adjust in `style.css` if needed).

## Credits

- Built with vanilla HTML, CSS, and JavaScript.
- Media (images/music) belong to the project owner. Replace with your own assets if needed.

## License

This project is open for personal use. If you plan to redistribute or commercialize, please add an appropriate license file (e.g., MIT) and ensure you have rights to all media in `/img` and `/music`.

