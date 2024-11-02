export interface User {
    "id": "string",
    "email": "string",
    "username": "string",
    "fullName": {
        "givenName": "string",
        "familyName": "string"
    },
    "avatarHash": "string",
    "provider": "google",
    "googleID": "string",
    "facebookID": "string",
    "title": "string",
    "notifications": [
        {
            "title": "string",
            "date": "2024-11-02T10:55:49.045Z"
        }
    ],
    "friends": [
        "string"
    ],
    "bio": "string",
    "achievements": [
        {
            "name": "string",
            "date_awarded": "2024-11-02T10:55:49.046Z"
        }
    ],
    "skills": [
        "string"
    ],
    "badges": [
        "string"
    ],
    "location": "string",
    "preferredTopics": [
        "string"
    ],
    "points": 0,
    "admin": true,
    "createdAt": "2024-11-02T10:55:49.046Z"
}