# Two Way Trello Synchronization using AWS Serverless

## **Overview**
The Trello Sync Project is a cloud-native, serverless application built using Node.js and deployed on AWS Lambda. It is designed to streamline the synchronization of Trello cards across multiple boards, ensuring real-time data consistency in collaborative workflows. By leveraging Trello's robust API and AWS's scalable infrastructure, this tool eliminates the need for manual updates, significantly enhancing team productivity.

The project enables two-way synchronization of Trello cards, ensuring the latest changes in card attributes like names, descriptions, labels, due dates, and checklists are reflected seamlessly between the source and target cards. Advanced features such as conflict resolution using timestamps, retry mechanisms to handle API rate limits, and event-driven updates via Trello Webhooks make the application highly reliable and efficient for dynamic workflows.

In addition to its functional features, the project is designed for scalability and monitorability. It integrates AWS CloudWatch for detailed logging and monitoring, providing actionable insights into synchronization processes. AWS Serverless Application Model (SAM) is utilized to manage the deployment and infrastructure as code, making it easy to set up, maintain, and extend.

As modern teams rely heavily on Trello for managing tasks and projects, there often arises a need to share or mirror information across boards or teams. Without an automated solution, such tasks require time-consuming manual efforts, leading to inefficiencies and the potential for inconsistencies.

The Advanced Trello Sync Project solves this problem by:

-Automating synchronization across boards.
-Reducing manual efforts by up to 80%.
-Enhancing operational efficiency by maintaining consistent and accurate data across workflows.
-Supporting additional fields and advanced use cases for flexibility in diverse project environments.

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

## **Structure**
```plaintext
trello_two_way_sync/
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



