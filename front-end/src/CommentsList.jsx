export default function CommentsList({ comments }) {
  return (
    <>
      <h3>Comments:</h3>
      {comments.map(c => (
        <div key={c.text}>
          <h4>{c.postedBy}</h4>
          <p>{c.text}</p>
        </div>
      ))}
    </>
  )
}