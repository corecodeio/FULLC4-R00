import React, { useState } from "react";
//components
import Mouse from "./../components/Mouse";

const EffectsExample = () => {
  const [open, setOpen] = useState(false);
  const handleMouse = () => {
    setOpen(!open);
  };
  
  return (
    <div>
      <button onClick={handleMouse}>
        {`${open ? "cerrar" : "abrir"} mouse`}
      </button>
      {open && <Mouse />}
    </div>
  );
};

export default EffectsExample;