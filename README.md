# 1. Mail Client using React-Redux

### Components

- The application consists of four main components:
    - **Folders**
    - **MailList**
    - **Mail**
    - **ComposeMail**

- In addition to the above, there is a container component **App.js**.
- The components Folders, MailList, and Mail render as three separate columns.
- The ComposeMail component is a full-screen component (popup).

### Routes

- There are four folders:
    - **Inbox**
    - **Sent Mails**
    - **Drafts**
    - **Trash**
- Implement Routing for all the folders.
- Clicking the folders should change the URL, and render the corresponding emails in the MailList component.

### MailList and Mail Component

- The data for MailList should be fetched from the Json server which can be set up and started from the second question in <https://my-json-server.typicode.com/frescoplaylab/React-E2-Json_server/inbox>

- Load the MailList to store and display the list from memory.

- Each mail in the list should display a **greyed** delete button on mouseover.

- Clicking the mail should display details of the mail in the Mail component.

- Get mail details from <https://my-json-server.typicode.com/frescoplaylab/React-E2-Json_server/mails/:id> for each mail.

- Clicking the delete button should move the mail to the trash folder.

### Searching and Sorting

- The MailList component should have a **search bar** and a **sort** drop-down box.

- Searching should search for all emails in the memory from the inbox.

- Sort should be based on newest on top and oldest on top.  It should be based on time parameter from API.

- After searching and sorting, the Mail component should not display any emails.  Emails should be displayed only on clicking the mails.

### Pagination

- The MailList component should have a **Next** and **Prev** button.

- Only **six emails** should be displayed in the MailList component at a time.

- Clicking the **Next** button should load the next set of emails.

- The **Next** button must be disabled on the last page, and **Prev** button must be disabled on the first page.

### ComposeMail Component

- Clicking the **Compose** button should load the ComposeMail component.

- It should have **two input text boxes**, and a text area for the fields **Subject** and **Body**.

- There must be two buttons at the bottom save and send.

-  The To field is mandatory, and should have email validation on clicking the **Send** button.  Clicking the **Send** button should move the ComposeMail component to the **sent mail** folder.

- Clicking **Save** will move the ComposeMail component to the **Draft** folder.  No validation is needed.

### Drafts

- The saved emails should be displayed in the **Drafts** folder.

- The Mails component should have an *Edit button* when displaying emails in the **Draft** folder.

- Clicking the edit button should load the ComposeMail component with details from the corresponding mail.

- Clicking **Save** should update the existing draft mail, and clicking **Send** should move it to the sent folder.  It should not be listed in the draft folder.

### Trash

- Clicking the **Delete** button in MailList should move a mail to the **Trash** folder.

- MailList in the **Trash** folder should display a **Restore** button instead of the **Delete** button.  Clicking **Restore** should restore the mail to the corresponding folder.

- You should be able to delete from all three folders, **inbox**, **sent**, and **draft**.

### Redux - Redux Saga

- Emails must be stored in a Redux store.  Use actions/reducers to load an show data.

-  Use **react saga** for async middleware - to call APIs with Redux.

-  Use **react-router** to  manage folders - inbox, sent, draft, and trash.

Sample API format:

`
{
    "inbox": [
        {
            "id":"1",
            "from":"ievolve@tcs.com",
            "to":"user@tcs.com",
            "time":"2018-02-24T18:25:43.511Z",
            "subject":"Remainder"
        },
        {
            "id":"2",
            "from":"idm@tcs.com",
            "to":"user@tcs.com",
            "time":"2018-02-23T18:25:43.511Z",
            "subject":"TCS - IDM"
        }
    ],
    "mails": [
        {
            "id":"1",
            "from":"ievolve@tcs.com",
            "to":"user@tcs.com",
            "subject":"Remainder"
            "time":"2018-02-24T18:25:43.511Z",
            "body":"You are invited for a webex"
        },
        {
            "id":"2",
            "from":"idm@tcs.com",
            "to":"user@tcs.com",
            "subject":"TCS - IDM",
            "time":"2018-02-23T18:25:43.511Z",
            "body": "You are invited for a webex"
        }

    ]
}
`

- There are two APIs: <https://my-json-server.typicode.com/frescoplaylab/React-E2-Json_server/inbox>, and
<https://my-json-server.typicode.com/frescoplaylab/React-E2-Json_server/mails/id>

