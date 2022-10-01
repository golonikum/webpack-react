import React from "react";

export function preventDefault<T extends (e: any) => void>(fn: T) {
  console.log("preventDefault");
  return <E extends React.SyntheticEvent<any>>(e: E) => {
    e.preventDefault();
    fn(e);
  };
}
/*

interface InputProps {
  onChange: (value: string) => void;
  value: string;
}
function Input({ onChange, value }: InputProps) {
  return <input value={value} onChange={preventDefault(stopPropagation(getValue(onChange)))} />;
}

*/