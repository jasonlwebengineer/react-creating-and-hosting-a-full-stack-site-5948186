import { Link } from "react-router-dom"
import PropTypes from "prop-types"

function ArticlesList(props) {

  const aList = props.articles;

  return (
    <>
      {aList.map(a => (
        <>
        <h3 key={"title_" + a.name}>{a.title}</h3>
        <p key={"summary_" + a.name}>{a.summary}</p>
        <Link key={"name_" + a.name} to={'/articles/' + a.name}><p key={"text_" + a.name}>Open {a.name}</p></Link>
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