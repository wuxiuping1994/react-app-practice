import { Button } from "antd";
import { Link } from "react-router-dom";

const Detail = (props) => {
  const { state } = props.location;
  return (
    <div className="showDetial">
      <p>
        <strong>Description:</strong>
        <span>{state.description}</span>
      </p>
      <p>
        <strong>Category:</strong>
        <span>{state.category}</span>
      </p>
      <p>
        <strong>Content:</strong>
        <span>{state.content}</span>
      </p>
      <Button type="primary">
        <Link to={{ pathname: "/todo" }}>Back</Link>
      </Button>
    </div>
  );
};

export default Detail;
