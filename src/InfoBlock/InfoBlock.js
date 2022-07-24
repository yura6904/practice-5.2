import propTypes from 'prop-types'

/*
* компонент отвечающий за нижний новостной блок, 
* который вызывает функцию в чилдрен, которая оторбражает новостную карту
*/

function InfoBlock(props) {

  return (
    <div className="InfoBlock">
      {props.children(props.blocks)}
    </div>
  );
}

InfoBlock.propTypes = {
  blocks: propTypes.array
}

export default InfoBlock;
