import propTypes from 'prop-types'
import List from '../ListElements/List';
import ListElement from '../ListElements/ListElement';

/*
* карточка блока новостей
*/

function InfoCard(props) {
  return (
    <div className="InfoCard">
      <h3>{props.headerBlock}</h3>
      <List elements={props.block}>
        {news => news.map((n, idx) => <ListElement key={idx} new={n}  type='info-card'/>)}
      </List>
    </div>
  );
}

InfoCard.propTypes = {
  block: propTypes.object,
  headerBlock: propTypes.string
}

export default InfoCard;
