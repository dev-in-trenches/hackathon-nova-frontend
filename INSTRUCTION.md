# Product Requirements Document: Dashboard Focus (MVP)

## 1. Dashboard Overview

The Dashboard serves as the centralized "Brain" of the application. While the Browser Extension handles real-time data extraction on job sites, the Dashboard manages user identity, AI context, long-term application tracking, and performance analytics.

---

## 2. Feature Breakdown

### 2.1 User Profile & AI Context Management

This module stores the data required for the **Job Analysis Engine** to make accurate comparisons.

- **Skill Inventory:** A searchable list of technical and soft skills.
- **Experience Summary:** A narrative-driven section for the AI to pull "proof of work."
- **Portfolio Repository:** Centralized management of links and project descriptions.
- **Tone & Style Settings:** Upload functionality for _Past Successful Proposals_ to train the AI on the user's unique writing voice.
- **Preferred Rates:** Default hourly and fixed-price settings for bid strategy.

### 2.2 Centralized Proposal Editor

A workspace to refine AI-generated content before it is pushed back to the extension for autofill.

- **Sectioned Editing:** Breakdown of the JSON-generated proposal into editable blocks (Hook, Problem, Approach, CTA).
- **AI Refinement Tools:** Buttons to "Shorten," "Make more technical," or "Change tone" for specific sections.
- **Variable Injection:** Manually adjust milestones or bid amounts within the UI.

### 2.3 Application Tracking System (ATS)

A visual pipeline to manage the lifecycle of every job analyzed by the system.

- **Kanban/List View:** Columns for _Drafted_, _Approved_, _Submitted_, _Interviewed_, _Won_, and _Lost_.
- **Manual Status Overrides:** Users can update the status of an application once they receive a response on the external platform.
- **Job History:** A searchable archive of every job description scraped by the extension and the corresponding proposal sent.

### 2.4 Performance Analytics

Data-driven insights to measure the ROI of the tool.
| Metric | Description |
| :--- | :--- |
| **Win Rate** | Percentage of submitted proposals that result in a "Won" status. |
| **Generation Efficiency** | Average time spent from "Job Detected" to "Proposal Approved." |
| **AI Alignment** | The percentage of the proposal edited by the human (tracks AI accuracy). |
| **Revenue Impact** | Total dollar value of contracts secured using the tool. |

---

## 3. System Architecture (Dashboard Logic)

1.  **Data Ingress:** Receives structured job data from the Extension via API.
2.  **Processing Layer:** Passes Job Data + User Profile to the **Nova 2 Lite** model.
3.  **Persistence Layer:** Stores job history, generated proposals, and tracking states in the database.
4.  **Presentation Layer:** Displays the Analytics and ATS UI to the user.

---

## 4. User Flow (Dashboard Path)

1.  **Onboarding:** User fills out Profile and Skills (Step 1 of PRD).
2.  **Active Sourcing:** User uses Extension; data is synced to the Dashboard in real-time.
3.  **Review:** User logs into Dashboard to see a list of "Drafted" proposals.
4.  **Refine:** User edits the proposal in the Dashboard editor.
5.  **Track:** User marks a job as "Won" after an interview.
6.  **Analyze:** User checks the Analytics tab to see which "Bid Strategy" is resulting in the highest win rate.
