# The Paddock Hub-  Stats Website

## Overview

The paddock hub is an interactive statistics website that provides real-time data from multiple mototrsport categories,  This website is built using Django for the backend and React for the frontend, with PostgreSQL as the database.

## Features

- **Real-time Stats**: Data fetched from external APIs for teams and players.
- **React Frontend**: Dynamic, interactive UI for viewing soccer stats.
- **Modular Django Apps**: Each league is handled by a separate Django app for maintainability and scalability.
- **PostgreSQL**: Used as the database for storing and managing league, team, and player data.

## Architecture

- **Backend**: Django with separate apps for each category.
- **Frontend**: React application for user interaction and displaying stats.
- **Database**: PostgreSQL for data storage and management.
- **External APIs**: Data fetched from different APIs.

  ## Getting Started

### Prerequisites

- Python 3.x
- Django 4.x
- PostgreSQL
- Node.js and npm
- React (installed via `create-react-app`)
- API keys for external APIs (if required)

### Backend Setup (Django)

1. **Clone the repository**:
2. python -m venv venv
3. source venv/bin/activate  # On Windows: venv\Scripts\activate
4. pip install -r requirements.txt
5. python manage.py migrate

MIT License
Copyright (c) 2024 Keamogetswe M
