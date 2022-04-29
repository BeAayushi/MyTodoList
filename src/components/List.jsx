import "./List.css";

function List(props) {
    const deleteHandler=(key)=>{
   const newList= props.itemList.filter((element)=>{
        return element?.key!==key
    }) 
    props.setItemList(newList)
    }
  return (
    <div>
      {props.itemList.map((element,index) => {
        return <div className="Item">
            <p>{element.item}</p>
            <button onClick={()=>deleteHandler(element.key)}>x</button>
        </div>
      })}
    </div>
  );
}
export default List;
