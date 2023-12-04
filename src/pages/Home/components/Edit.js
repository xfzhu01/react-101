import { useState } from "react";
import { v4 } from "uuid";

const Edit = ({ add, submittingStatus }) => {
  const addItem = () => {
    submittingStatus.current = true;
    add((prev) => {
      return [{ id: v4(), note, date, time }, ...prev];
    });
  };

  const [note, setNote] = useState("");
  const noteChange = (e) => {
    setNote(e.target.value);
  };

  const [date, setDate] = useState("");
  const dateChange = (e) => {
    setDate(e.target.value);
  };

  const [time, setTime] = useState("");
  const timeChange = (e) => {
    setTime(e.target.value);
  };

  return (
    <div>
      <h1>备忘录</h1>
      <p>记事</p>
      <input type="text" value={note} onChange={noteChange} />
      <p>日期</p>
      <input type="date" value={date} onChange={dateChange} />
      <p>时间</p>
      <input type="time" value={time} onChange={timeChange} />
      <button className="add" onClick={addItem}>
        新增
      </button>
    </div>
  );
};

export default Edit;
