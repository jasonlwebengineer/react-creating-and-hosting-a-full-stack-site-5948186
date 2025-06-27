import { Link } from "react-router-dom"
import PropTypes from "prop-types"

function ArticlesList(props) {

  const aList = props.articles;

  return (
    <>
      {aList.map(a => (
        <>
        <h3>{a.title}</h3>
        <p>{a.summary}</p>
        <Link key={a.name} to={'/articles/' + a.name}><p>Open {a.name}</p></Link>
        </>
      ))}
    </>
  )
}

// Correct casing and shape validation
ArticlesList.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      summary: PropTypes.string.isRequired,
    })
  ).isRequired,
}


export default ArticlesList;