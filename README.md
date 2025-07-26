# WebSocket Server

A lightweight, framework-agnostic WebSocket server built with Socket.IO and RabbitMQ for real-time communication across any tech stack.

## ✨ Features

- **Real-time Communication** - Socket.IO-powered WebSocket connections
- **Message Brokering** - RabbitMQ integration for reliable message delivery
- **Framework Agnostic** - Works with any frontend or backend technology
- **Docker Ready** - One-command deployment with Docker Compose
- **Management Dashboard** - Built-in RabbitMQ management interface

---

## 🚀 Quick Start

### Prerequisites

- Docker and Docker Compose installed on your system

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/YOUR_USERNAME/websocket-server.git
   cd websocket-server
   ```

2. **Start the services**
   ```bash
   docker compose up -d
   ```

That's it! Your WebSocket server is now running.

---

## 📦 Services

| Service                 | Port    | Description                                |
| ----------------------- | ------- | ------------------------------------------ |
| **WebSocket Server**    | `3001`  | Socket.IO server for real-time connections |
| **RabbitMQ (AMQP)**     | `5672`  | Message broker protocol                    |
| **RabbitMQ Management** | `15672` | Web-based management interface             |

---

## 🔌 Usage

### WebSocket Connection

Connect your client applications to:

```
ws://localhost:3001
```

**Example (JavaScript):**

```javascript
import { io } from "socket.io-client";

const socket = io("ws://localhost:3001");

socket.on("connect", () => {
  console.log("Connected to WebSocket server");
});

socket.on("message", (data) => {
  console.log("Received:", data);
});
```

### RabbitMQ Management Dashboard

- **URL:** http://localhost:15672
- **Username:** `guest`
- **Password:** `guest`

Use the dashboard to monitor queues, exchanges, and message flow.

---

## 🛠 Framework Integration

This server works seamlessly with multiple technologies:

### Backend Frameworks

- **Laravel** - Queue jobs → RabbitMQ → WebSocket broadcasts
- **CodeIgniter** - Custom message publishing to RabbitMQ
- **Express.js** - Direct Socket.IO integration
- **Python (Django/Flask)** - Publish messages via RabbitMQ client
- **Go** - AMQP client integration

### Frontend Frameworks

- **Vue.js** - Socket.IO Vue plugin
- **React** - Socket.IO React hooks
- **Angular** - Socket.IO service integration
- **Vanilla JS** - Direct Socket.IO client

---

## 📁 Project Structure

```
websocket-server/
├── server.js              # Main WebSocket server
├── package.json           # Node.js dependencies
├── docker-compose.yml     # Docker services configuration
├── .gitignore            # Git ignore rules
├── .dockerignore         # Docker ignore rules
└── README.md             # This file
```

---

## ⚙️ Configuration

### Environment Variables

Create a `.env` file to customize settings:

```env
# WebSocket Server
WS_PORT=3001
WS_CORS_ORIGIN=*

# RabbitMQ
RABBITMQ_USER=guest
RABBITMQ_PASS=guest
RABBITMQ_HOST=rabbitmq
RABBITMQ_PORT=5672
```

### Testing WebSocket Connection

```bash
# Install wscat for testing
npm install -g wscat

# Connect to WebSocket server
wscat -c ws://localhost:3001
```

---

## 🔧 Management Commands

### Start Services

```bash
docker compose up -d
```

### Stop Services

```bash
docker compose down
```

### Rebuild and Restart

```bash
docker compose up -d --build
```

### View Logs

```bash
# All services
docker compose logs -f

# Specific service
docker compose logs -f websocket-server
docker compose logs -f rabbitmq
```

### Clean Up Everything

```bash
# Stop and remove containers, networks, and volumes
docker compose down -v --remove-orphans
```

---

## 🔗 Related Projects

- [Socket.IO Documentation](https://socket.io/docs/)
- [RabbitMQ Documentation](https://www.rabbitmq.com/documentation.html)
- [Docker Compose Reference](https://docs.docker.com/compose/)
