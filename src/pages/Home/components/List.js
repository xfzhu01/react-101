import Item from "./Item";

const List = ({ listData, deleteData, submittingStatus }) => {
  return (
    <div className="list">
      {listData.map((item) => {
        const { id, note = "预设值", date, time } = item;
        return (
          <Item
            key={id}
            id={id}
            note={note}
            time={time}
            date={date}
            deleteData={deleteData}
            submittingStatus={submittingStatus}
          />
        );
      })}
    </div>
  );
};

export default List;
