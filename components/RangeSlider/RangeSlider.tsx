"use client";

import React, { useState } from "react";

export default function RangeSlider({ minNumber, maxNumber }: any) {
  // Estado para almacenar el valor del slider
  const [sliderValue, setSliderValue] = useState<number>(minNumber);

  // Función para manejar el cambio en el slider
  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Obtén el nuevo valor del slider
    const newValue = Number(event.target.value);

    // Verifica si el nuevo valor está dentro del rango permitido
    if (newValue >= minNumber && newValue <= maxNumber) {
      // Actualiza el estado con el nuevo valor del slider
      setSliderValue(newValue);
    }
  };

  return (
    // Condición para renderizar el componente
    // showComponent es true y sliderValue > 3.0
    <div className="w-1/2">
      <div className="flex justify-center">
        <span className="text-4xl">
          ${sliderValue.toFixed(1)} - ${maxNumber}
        </span>
      </div>
      <input
        type="range"
        className="transparent h-1.5 w-full cursor-pointer appearance-none rounded-lg border-transparent bg-gradient-to-r from-[#EDFF003E] to-flourescentYellow"
        id="customRange1"
        value={sliderValue} // Establece el valor del slider
        onChange={handleSliderChange} // Maneja el cambio en el slider
        min={minNumber} // Establece el valor mínimo a 0
        max={maxNumber} // Establece el valor máximo a 2.5
        step={1} // Establece el incremento en 0.1
      />
    </div>
  );
}
