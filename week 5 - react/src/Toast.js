import React, { useState, useEffect } from "react";
// import "./App.css";

const ToastButtons = [
  {
    id: 1,
    type: "success",
    className: "success",
    label: "Success",
  },
  {
    id: 2,
    type: "danger",
    className: "danger",
    label: "Danger",
  },
  {
    id: 3,
    type: "info",
    className: "info",
    label: "Info",
  },
  {
    id: 4,
    type: "warning",
    className: "warning",
    label: "Warning",
  },
];

const ToastMessage = () => {
  const [list, setList] = useState([]);
  let toastProperties = null;

  const showToast = (type) => {
    const id = Math.random() * 101 + 1;

    switch (type) {
      case "success":
        toastProperties = {
          id,
          title: "Success",
          backgroundColor: "#5cb85c",
        };
        break;
      case "danger":
        toastProperties = {
          id,
          title: "Danger",
          backgroundColor: "#d9534f",
        };
        break;
      case "info":
        toastProperties = {
          id,
          title: "Info",
          backgroundColor: "#5bc0de",
        };
        break;
      case "warning":
        toastProperties = {
          id,
          title: "Warning",
          backgroundColor: "#f0ad4e",
        };
        break;

      default:
        setList([]);
    }

    setList([...list, toastProperties]);
  };

  return (
    <div className="app">
      <div className="app-header">
        <p>React Toast Component</p>
        <div className="toast-buttons">
          {ToastButtons.map((e) => (
            <Button
              key={e.id}
              label={e.label}
              className={e.className}
              handleClick={() => showToast(e.type)}
            />
          ))}
        </div>
      </div>

      <Toast toastList={list} />
    </div>
  );
};

const Button = (props) => {
  const { label, className, handleClick } = props;

  return (
    <>
      <button className={className} onClick={handleClick}>
        {label}
      </button>
    </>
  );
};

const Toast = (props) => {
  const { toastList } = props;
  const [list, setList] = useState(toastList);

  useEffect(() => {
    setList([...toastList]);
  }, [toastList]);

  const deleteToast = (id) => {
    const listItemIndex = list.findIndex((e) => e.id === id);
    const toastListItem = toastList.findIndex((e) => e.id === id);
    list.splice(listItemIndex, 1);
    toastList.splice(toastListItem, 1);
    setList([...list]);
  };

  return (
    <>
      <div className="notification-container">
        {list.map((toast, i) => (
          <div
            key={i}
            className="notification toast"
            style={{ backgroundColor: toast.backgroundColor }}
          >
            <button onClick={() => deleteToast(toast.id)}>X</button>

            <div>
              <p className="notification-title">{toast.title}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ToastMessage;
