class Message {
  constructor(name){
    this.channel = 'GG9ACKDPT'
    this.text = name || 'Yo yo yo'
    this.blocks = []
  }
  addText(text){
    this.blocks.push({
      "type": "section",
      "text": {
        "type": "mrkdwn",
        "text": text
      }
    })
  }
  addDivider(text){
    this.blocks.push({
      "type": "divider"
    })
  }
  addListItem(text, imageUrl){
    let item = {
      "type": "section",
      "text": {
        "type": "mrkdwn",
        "text": text
      }
    }
    if(imageUrl){
      item["accessory"] = this.addAccesory(imageUrl)}
    this.blocks.push(item)
  }
  addAccesory(imageUrl){
    return {
      "type": "image",
      "image_url": imageUrl,
      "alt_text": "alt text for image"
    }
  }

}

export function newMessage (name){ return new Message(name)} 



// export function newMessage(){
//   return {
//     blocks: []
//   }
// }

// export function Text(text){
  // console.log(this)
  // return {
  //   "type": "section",
  //   "text": {
  //     "type": "mrkdwn",
  //     "text": text
  //   }
  // }
// }