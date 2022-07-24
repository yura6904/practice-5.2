import propTypes from 'prop-types'
import List from '../ListElements/List';
import ListElement from '../ListElements/ListElement';

/*
* строка поиска
*/

function Search(props) { 
  const categoriesLinks = ['Видео', 'Картинки', 'Новости', 'Карты', 'Маркет', 'Переводчик', 'Эфир', 'ещё']

  return (
    <div className="Search">
      <List elements={categoriesLinks}> 
        {elements => elements.map((e, idx) => <ListElement key={idx} element={e} type='text-line'/>)}
      </List>
      <div className='search-block'>
        <img className='yandex-img' src='https://imgurl.argumenti.ru/news/news_id/359473.jpg' alt='#'></img>
        <input type={'text'}></input>
      </div>
      <div className='add-block'>
        <img className='add-img' src={props.addLink} alt='#'></img>
      </div>
    </div>
  );
}

Search.propTypes = {
  icon: propTypes.string
}

export default Search;
