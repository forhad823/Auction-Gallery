# Auction Gallery

**Bid on Unique Items from Around the World**

![Auction Gallery Screenshot](public/auction-gallery.png)

This is a simple but elegant web application that showcases a gallery of items up for auction. Users can browse through a list of active auctions, add items to their favorites, and see the total bid amount for their selected items.

## Features

- **Browse Active Auctions:** View a list of items currently available for bidding.
- **Favorite Items:** Add or remove items from a personal favorites list.
- **Real-time Bid Calculation:** The total bid amount for favorite items is calculated and displayed instantly.
- **User-Friendly Interface:** A clean and intuitive interface built with React and Tailwind CSS.
- **Notifications:** Receive toast notifications when adding or removing items from your favorites.

## Technologies Used

- **Frontend:**
  - [React](https://reactjs.org/)
  - [Vite](https://vitejs.dev/)
  - [Tailwind CSS](https://tailwindcss.com/)
  - [daisyUI](https://daisyui.com/)
- **Linting:**
  - [ESLint](https://eslint.org/)
- **Package Manager:**
  - [npm](https://www.npmjs.com/)

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js (v14 or later)
- npm

### Installation

1.  Clone the repo
    ```sh
    git clone https://github.com/your_username/assignment-7-auction-gallery.git
    ```
2.  Install NPM packages
    ```sh
    npm install
    ```

### Running the Application

To run the app in the development mode, use:

```sh
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

## Project Structure

```
.
├── public
│   ├── bid-items.json
│   └── ...
├── src
│   ├── components
│   │   ├── Auction
│   │   │   ├── Auction.jsx
│   │   │   ├── Favorite.jsx
│   │   │   └── Itemtable.jsx
│   │   ├── Banner.jsx
│   │   ├── Footer.jsx
│   │   └── Navbar.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── ...
├── package.json
└── ...
```

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.
