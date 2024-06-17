import { Loader } from "lucide-react";
import React from "react";

const loading = () => {
  return (
    <div role="status" aria-live="polite">
      <Loader className="h-12 w-12 animate-spin" />
      <span className="sr-only">Cargando...</span>
    </div>
  );
};

export default loading;
