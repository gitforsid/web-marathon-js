import './category-item.styles.scss'


const CategoryItem = ({ category }) => {
  const { imageUrl, title, id } = category;
  return (
    <div key={id} class='category-container'>
      <div
      className='background-image'
      style={{
        backgroundImage: `url(${imageUrl})`,
      }} />
      <div class='category-body-container'>
        <h2>{title}</h2>
        <p>shop new</p>
      </div>
    </div>
  )
}

export default CategoryItem
