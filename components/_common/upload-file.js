export default function UploadFile({ text }) {
  return (
    <div className="upload-file">
      + Upload{text ? ` ${text}` : ''}
    </div>
  )
}
