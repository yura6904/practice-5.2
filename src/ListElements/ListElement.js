import propTypes from 'prop-types'
import TextLines from '../TextLines/TextLines'

/*
* отображает элементы списка, в зависимости от переданного типа
*/

function ListElement(props) {
    let liElement = null
    switch(props.type) {
        case 'text-line': 
            liElement = (
                <li className='li-el'>
                    {props.element}
                </li>
            )
            break

        case 'info-card': 
            liElement = (
                <li className='li-el'>
                    <TextLines new={props.new}/>
                </li>
            )
            break

        default: break
    }
  return liElement
}

ListElement.propTypes = {
    element: propTypes.object,
    type: propTypes.string
}

export default ListElement;
