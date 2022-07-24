import propTypes from 'prop-types'

/*
* отображает разные списки, которые выбирает по типу компонент List
*/

function List(props) {
    return (
        <ul className='ul-list'>
            {props.children(props.elements)}
        </ul>
    )
}

List.propTypes = {
    elements: propTypes.array
}

export default List;
  