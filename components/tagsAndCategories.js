const TagsAndCategories = ({blog}) => {
  return (
    <div style={pageStyles.tagsAndCategories}>
      {blog.node.categories.nodes.length > 0 &&
        <span>
          <span style={pageStyles.taxonomyTitle}>Category:</span>
          {blog.node.categories.nodes.map((node, idx)=> {
            return(
              <span key={node.id}>
                <a href={`/blog/category/${node.name}`}>{` ${node.name}${blog.node.categories.nodes.length-1===idx?'':','}`}</a>
              </span>
            )
          })}
          <span style={pageStyles.taxonomySpace}/>
        </span>
      }
      {blog.node.tags.nodes.length > 0 &&
        <span>
          <span style={pageStyles.taxonomyTitle}>Tag:</span>
          {blog.node.tags.nodes.map((node, idx)=> {
            return(
              <span key={node.id}>
                <a href={`/blog/tag/${node.name}`}>{` ${node.name}${blog.node.tags.nodes.length-1===idx?'':','}`}</a>
              </span>
            )
          })}
        </span>
      }
    </div>
  )
}

export default TagsAndCategories
const FONT_SIZE = 17
const pageStyles = {
  tagsAndCategories: { marginTop: 10, fontSize: 15 },
  taxonomyTitle: { color: '#444', fontWeight: 'bold' },
  taxonomySpace: { paddingRight:10 }
}
