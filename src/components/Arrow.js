import './arrow.less';

const Arrow = props => {
  return (
    <div className="item-title">
      <span className="item-content">{props.text}</span>
    </div>
  );
};

export default Arrow;
