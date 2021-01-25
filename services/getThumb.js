export default function getThumb(item, size){
  if(item.thumbnails){
    if(size) {
      switch (size) {
        case 'small':
          return item.thumbnails.small.url
          case 'large':
            return item.thumbnails.large.url
          case 'full':
            return item.thumbnails.full.url      
        default:
            return item.thumbnails.url
          // break;
      }
    } else {
      if(item.thumbnails.large){
        return item.thumbnails.large.url
      } else return item.thumbnails.small.url
    }
    
  } else return 'http://placehold.jp/20/f9f9f9/d1d1d1/320x160.png?text=%3Ao'
}