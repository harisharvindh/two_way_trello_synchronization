# Two Way Trello Synchronization using AWS Serverless

## **Overview**
The Trello Sync Project is a robust Node.js application designed to synchronize Trello cards between different boards. It offers real-time, two-way synchronization of card fields like names, descriptions, labels, and due dates, while providing scalability and automation through AWS Lambda deployment. With advanced conflict resolution, error handling, and event-driven updates, this tool ensures efficient management of Trello workflows.

---

## **Features**
- **Two-Way Synchronization**: Automatically updates the most recently modified card while keeping the other in sync.
- **Field-Level Sync**: Syncs additional fields, including labels, due dates, and checklists.
- **Real-Time Updates**: Integrates with Trello Webhooks for event-driven synchronization.
- **Conflict Resolution**: Uses hash-based comparisons and timestamps to handle simultaneous edits.
- **Retry Mechanism**: Handles API rate limits with retry logic and exponential backoff.
- **Advanced Logging**: Captures detailed logs for debugging and auditing purposes.
- **Cloud Deployment**: Fully deployable on AWS Lambda with an AWS SAM template for infrastructure management.

---

## **Technologies Used**
- **Programming Language**: Node.js
- **Frameworks & Libraries**:
  - `axios`: For HTTP requests to the Trello API.
  - `dotenv`: For managing environment variables.
- **Cloud Services**:
  - AWS Lambda: For serverless execution.
  - AWS CloudWatch: For monitoring and logging.
- **Trello API**: To interact with Trello cards and boards.



---

## **Project Structure**
```plaintext
trello-_two_way_sync/
├── .env                   # Environment variables for sensitive data
├── package.json           # Project dependencies and scripts
├── index.js               # Main Lambda function handler
├── utils/
│   ├── trelloApi.js       # Functions for interacting with Trello API
│   ├── syncLogic.js       # Core synchronization logic
│   └── logger.js          # Logging utility
├── webhooks/
│   ├── webhookHandler.js  # Handles incoming webhook events
│   ├── webhookConfig.js   # Manages webhook setup
├── logs/
│   └── app.log            # Log file for operations
├── README.md              # Documentation
└── template.yaml          # AWS SAM template for cloud deployment

# Installation

## With pip

This repository is tested on Python 3.9+, Flax 0.4.1+, PyTorch 2.0+, and TensorFlow 2.6+.

You should install 🤗 Transformers in a [virtual environment](https://docs.python.org/3/tutorial/venv.html). If you're unfamiliar with Python virtual environments, check out the [user guide](https://docs.python.org/3/tutorial/venv.html).

First, create a virtual environment with the version of Python you're going to use and activate it:

### macOS/Linux
```bash
source env/bin/activate


