import propTypes from 'prop-types'

/*
* компонент, отображающий строку новости, в зависимости от имеющихся элементов для отображения
*/

function TextLines(props) {
  return (
    <div className="TextLines">
      {props.new.icon ? <img src={props.new.icon} alt='#'></img> : null}
      {props.new.boldText ? <p>{props.new.boldText + ' - ' }</p> : null}
      {props.new.text ? <p>{props.new.text}</p> : null}
      {props.new.grayText ? <p>{props.new.grayText}</p>: null}
    </div>
  );
}

TextLines.propTypes = {
  new: propTypes.object
}

export default TextLines;
