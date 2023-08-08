
export default ({list = []}) => (
  <ul>{list.map(l => <p>{l}</p>)}</ul>
)