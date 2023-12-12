# Creepto - Your Crypto Portfolio

Creepto is a cryptocurrency portfolio application designed to track and stalk all crypto data. Built using React.js and leveraging the Context API, Creepto provides comprehensive information on cryptocurrencies using the Geeko API. This app offers features such as real-time data updates, pagination, graphical representations, trending coins, and news updates.

Explore the world of cryptocurrencies and manage your portfolio with Creepto.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [Docker](https://www.docker.com/)

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/theFutureGuy/Crypto-Portfolio.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd Crypto-Portfolio
    ```

3. **Install dependencies:**

    ```bash
    npm install
    ```

4. **Build the Docker image:**

    ```bash
    docker build -t creepto-app .
    ```

5. **Run the Docker container:**

    ```bash
    docker run -p 3000:3000 creepto-app
    ```

6. **Open your browser and go to [http://localhost:3000](http://localhost:3000) to access Creepto.**

## Features

- **Real-time Updates:** Stay updated with live data for all cryptocurrencies.
- **Pagination:** Easily navigate through extensive crypto data.
- **Graphs:** Visualize historical and real-time data for better insights.
- **Trending Coins:** Discover trending coins in the market.
- **News Updates:** Stay informed with the latest news related to cryptocurrencies.

## Contributing

If you'd like to contribute to Creepto, follow these steps:

1. Fork the repository.
2. Create a new branch.
3. Make your changes and commit them.
4. Push to your fork and submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgements

- Creepto utilizes the Geeko API for fetching crypto data.
- Special thanks to the React.js community for their framework and libraries.

