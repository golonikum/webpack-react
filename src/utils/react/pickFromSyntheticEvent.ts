import React from "react";

export function pickFromSyntheticEvent<T extends HTMLElement>() {
  return <K extends keyof T>(key: K) =>
    <E extends (t: T[K]) => void>(fn: E) =>
    (e: React.SyntheticEvent<T>) =>
      fn(e.currentTarget[key]);
}

export const getValue = pickFromSyntheticEvent<HTMLInputElement>()("value");

export const getChecked = pickFromSyntheticEvent<HTMLInputElement>()("checked");

/*
function Checkbox(props: {
  onChange: (value: boolean) => void;
  value: boolean;
}) {
  return (
    <input
      type="checkbox"
      checked={props.value}
      onChange={getChecked(props.onChange)}
    />
  );
}
*/