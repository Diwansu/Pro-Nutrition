


export default function Search(props) {
  return (
    <>
      <h3 style={{ marginLeft: "100px", fontSize: "27px" }}>Search</h3>
      <input
        onChange={(e) => {
          props.handleSearch(e);
        }}
        type="search"
        style={{
          borderColor: "black",
          marginLeft: "100px",
          marginBottom: "20px",
        }}
      ></input>
    </>
  );
}
