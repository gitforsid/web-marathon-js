import { useNavigate } from 'react-router-dom';

import './directory-item.styles.scss';


const DirectoryItem = ({ category }) => {
  const { imageUrl, title, id, route } = category;
  const navigate = useNavigate();
  const onNavigateHandler = () => navigate(route);

  return (
    <div key={id} className='directory-item-container' onClick={onNavigateHandler}>
      <div
      className='background-image'
      style={{
        backgroundImage: `url(${imageUrl})`,
      }} />
      <div className='directory-item-body'>
        <h2>{title}</h2>
        <p>shop new</p>
      </div>
    </div>
  );
}

export default DirectoryItem;
