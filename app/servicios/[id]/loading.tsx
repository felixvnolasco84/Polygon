import React from "react";
import { Loader } from "lucide-react";

const loading = () => {
  return (
    <div role="status" aria-live="polite">
      <Loader className="h-12 w-12 animate-spin" />
      <span className="sr-only">Cargando...</span>
    </div>
  );
};

export default loading;
