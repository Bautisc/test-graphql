// Some mock data generated with AI


const users = [
  {
    id: "1",
    firstName: "Alice",
    lastName: "Smith",
    completedSessions: 3,
    remainingSessions: 2,
    sessions: [
      { id: "1", sessionNumber: 1, sessionDate: "2024-10-01", userId: "1" },
      { id: "2", sessionNumber: 2, sessionDate: "2024-10-03", userId: "1" },
      { id: "3", sessionNumber: 3, sessionDate: "2024-10-05", userId: "1" },
    ]
  },
  {
    id: "2",
    firstName: "Bob",
    lastName: "Johnson",
    completedSessions: 5,
    remainingSessions: 0,
    sessions: [
      { id: "4", sessionNumber: 1, sessionDate: "2024-09-20", userId: "2" },
      { id: "5", sessionNumber: 2, sessionDate: "2024-09-22", userId: "2" },
      { id: "6", sessionNumber: 3, sessionDate: "2024-09-24", userId: "2" },
      { id: "7", sessionNumber: 4, sessionDate: "2024-09-26", userId: "2" },
      { id: "8", sessionNumber: 5, sessionDate: "2024-09-28", userId: "2" },
    ]
  },
  {
    id: "3",
    firstName: "Carol",
    lastName: "Williams",
    completedSessions: 1,
    remainingSessions: 4,
    sessions: [
      { id: "9", sessionNumber: 1, sessionDate: "2024-10-10", userId: "3" },
    ]
  },
];

const sessions = [
  { id: "1", sessionNumber: 1, sessionDate: "2024-10-01", userId: "1" },
  { id: "2", sessionNumber: 2, sessionDate: "2024-10-03", userId: "1" },
  { id: "3", sessionNumber: 3, sessionDate: "2024-10-05", userId: "1" },
  { id: "4", sessionNumber: 1, sessionDate: "2024-09-20", userId: "2" },
  { id: "5", sessionNumber: 2, sessionDate: "2024-09-22", userId: "2" },
  { id: "6", sessionNumber: 3, sessionDate: "2024-09-24", userId: "2" },
  { id: "7", sessionNumber: 4, sessionDate: "2024-09-26", userId: "2" },
  { id: "8", sessionNumber: 5, sessionDate: "2024-09-28", userId: "2" },
  { id: "9", sessionNumber: 1, sessionDate: "2024-10-10", userId: "3" },
];

export const db = { sessions, users }
