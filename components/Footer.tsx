import React from 'react'

function Footer() {
  return (
      <footer className="mt-16 border-t border-gray-200/70 pt-8 pb-6 text-center text-sm text-gray-600">
        <p className="mb-3">
          Built with ❤️ by{" "}
          <a
            href="https://zhohadamani.info/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-sky-600 hover:text-sky-800 transition-colors"
          >
            Zhoha Damani
          </a>
        </p>
        <div className="flex justify-center space-x-6">
          <a
            href="https://www.linkedin.com/in/zhohadamani/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-sky-600 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="h-5 w-5"
            >
              <path d="M4.98 3.5a2.5 2.5 0 11-.001 5.001A2.5 2.5 0 014.98 3.5zM3 9h4v12H3zM9 9h3.6v1.71h.05c.5-.95 1.73-1.96 3.55-1.96 3.8 0 4.5 2.5 4.5 5.7V21h-4v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.15 1.46-2.15 2.96V21H9z" />
            </svg>
          </a>
          <a
            href="https://github.com/Zhoha28/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-sky-600 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49v-1.7c-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.9 1.57 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.74-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05a9.4 9.4 0 015 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.71 1.03 1.62 1.03 2.74 0 3.94-2.34 4.8-4.57 5.06.36.32.67.95.67 1.92v2.84c0 .27.18.6.69.49A10.25 10.25 0 0022 12.25C22 6.58 17.52 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </footer>
  )
}

export default Footer
