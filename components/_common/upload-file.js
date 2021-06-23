export default function UploadFile({ text }) {
    return (
        <div className="upload-file">
            {text ? text : "+ Upload Government ID photo"}
            {/* + Upload{text ? ` ${text}` : ""} */}
        </div>
    );
}
