import { Loader } from "lucide-react";
import React from "react";

const loading = () => {
  return (
    <div className="container flex h-screen w-full items-center justify-center">
      <Loader className="h-12 w-12 animate-spin" />
    </div>
  );
};

export default loading;
