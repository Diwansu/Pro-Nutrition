

const Total = (props) => {
  return (
    <div style={{ display: "flex", paddingLeft: "40px" }}>
      <h3>{`${Number(props.count)} ${props.name} = ${Number(
        props.totalCal
      )} calories`}</h3>
    </div>
  );
};

export default Total;
