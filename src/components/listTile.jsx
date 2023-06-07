export function ListTile(props) {
  const { image, name, age } = props
  return (
    <div className="listTile">
      <div className="avatar">
        <img src={image} alt={name} />
      </div>
      <div className="info">
        <h1 className="name">{name}</h1>
        <p>{age}</p>
      </div>
    </div>
  )
}
