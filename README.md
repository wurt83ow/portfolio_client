# Portfolio Client

This repository contains the client-side code for the "Portfolio" project, a personal portfolio website built using React. The project aims to provide a modern, responsive, and customizable web interface for showcasing personal projects, skills, and experiences.

## Features

- **Responsive Design**: Ensures optimal viewing experience across a wide range of devices.
- **Component-Based Architecture**: Built using React components for modularity and reusability.
- **SCSS for Styling**: Uses SCSS for more maintainable and scalable CSS.
- **Error Handling**: Includes custom error messages for better user experience.
- **Context API**: Manages global state with React's Context API.

## Project Structure

```plaintext
portfolio_client-master/
├── dist/                  # Compiled files for production
├── public/                # Static public assets
├── src/                   # Source files
│   ├── components/        # React components
│   ├── contexts/          # React context files
│   ├── config.js          # Configuration file
│   └── index.js           # Entry point of the application
├── .dockerignore          # Docker ignore file
├── .eslintrc.json         # ESLint configuration
├── .gitignore             # Git ignore file
├── babel.config.json      # Babel configuration
├── package.json           # NPM package configuration
├── README.md              # Project README file
├── update_containers.sh   # Script for updating Docker containers
└── webpack.config.js      # Webpack configuration
```

## Getting Started

### Prerequisites

- Node.js
- NPM (Node Package Manager)
- Docker (for containerized deployment)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/portfolio_client.git
   cd portfolio_client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

To start the development server, run:

```bash
npm start
```

The application will be available at `http://localhost:3000`.

### Building for Production

To create a production build, run:

```bash
npm run build
```

The output will be in the `dist` directory.

### Docker Deployment

The client application can be containerized using Docker. To build and run the Docker container, use the following commands:

1. Build the Docker image:

   ```bash
   docker build -t portfolio-client .
   ```

2. Run the Docker container:
   ```bash
   docker run -p 80:80 portfolio-client
   ```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

This project uses the following libraries and frameworks:

- [React](https://reactjs.org/)
- [Webpack](https://webpack.js.org/)
- [SCSS](https://sass-lang.com/)
- [Docker](https://www.docker.com/)

 
