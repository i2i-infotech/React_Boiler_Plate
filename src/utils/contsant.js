export const STATUS_COLOR = {
    CLOSE: "grey",
    PENDING: "yellow",
    OPEN: "green",
    PROGRESS: "red",
  };
  
  const generateLabel = (icon, text, color) => (
    <div className="generateLabel">
      <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600 }}>
        {text}
      </p>
    </div>
  );
  
  export const defaultStatusList = [
    {
      value: "CLOSE",
      label: generateLabel(null, "CLOSE", STATUS_COLOR["CLOSE"]),
      color: STATUS_COLOR["CLOSE"],
    },
   
    {
      value: "PENDING",
      label: generateLabel(null, "PENDING", STATUS_COLOR["PENDING"]),
      color: STATUS_COLOR["PENDING"],
    },
    {
      value: "OPEN",
      label: generateLabel(null, "OPEN", STATUS_COLOR["OPEN"]),
      color: STATUS_COLOR["OPEN"],
    },
    {
      value: "PROGRESS",
      label: generateLabel(null, "PROGRESS", STATUS_COLOR["PROGRESS"]),
      color: STATUS_COLOR["PROGRESS"],
    },
    
  ];