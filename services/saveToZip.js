import jsZip from 'jszip';
import {saveAs} from 'file-saver'

export default function saveToZip (filename, urls) {
  const zip = jsZip()
//   new JSZip()
  const folder = zip.folder(filename)
  urls.forEach((url)=> {
      const blobPromise = fetch(url).then(r => {
          if (r.status === 200) return r.blob()
          return Promise.reject(new Error(r.statusText))
      })
      const name = url.substring(url.lastIndexOf('/'))
      folder.file(name, blobPromise)
  })

  zip.generateAsync({type:"blob"})
      .then(blob => saveAs(blob, filename))
      .catch(e => console.log(e));
}