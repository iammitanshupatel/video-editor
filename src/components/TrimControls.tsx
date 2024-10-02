import React from "react";

interface TrimControlsProps {
  startTime: number;
  endTime: number;
  onReset: () => void;
}

const TrimControls: React.FC<TrimControlsProps> = ({
  startTime,
  endTime,
  onReset,
}) => {
  return (
    <div className="flex justify-between p-4 bg-gray-100 rounded-lg">
      <div>
        <span>Start: {startTime}s </span>
        <span>End: {endTime}s </span>
      </div>
      <button className="bg-red-500 text-white p-2 rounded" onClick={onReset}>
        Reset
      </button>
    </div>
  );
};

export default TrimControls;
