import propTypes from 'prop-types'

/*
* Хедер, который обращается к чилдренам, чтобы отобразить новости в хедере
*/

function Header(props) {
  return (
    <div className="Header">
      <div className="head">
        <h3>Сейчас в СМИ в России Рекомендуем</h3>
        <p>{props.date}</p>
      </div>
      <div className='header-news'>
        {props.children(props.news)}
      </div>
    </div>
  );
}

Header.propTypes = {
  date: propTypes.string,
  news: propTypes.array
}

export default Header;
