export default {
    name: 'item',
    type: 'document',
      title: 'Item',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name'
      },
      {
        name: 'price',
        type: 'number',
        title: 'Price'
      },
      {
        name: 'image',
        type: 'image',
        title: 'Image'
        
      },
      {
        name: "link",
        type: "url",
        title: "Link"
      },
      
      
    ]
  }