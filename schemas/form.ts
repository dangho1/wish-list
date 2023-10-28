import event from "./event"

export default {
    name: 'form',
    title: 'Form',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      {
        name: 'email',
        title: 'Email',
        type: 'string',
      },
      {
        name: 'event',
        title: 'Event',
        type: "reference",
        to: {type: "event"}
      },
      {
        name: 'message',
        title: 'Message',
        type: 'text',
      },
    ],
  }