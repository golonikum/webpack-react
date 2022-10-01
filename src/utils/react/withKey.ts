import React from "react";

export function withKey(key?: string) {
  return <E extends {}, T extends React.ComponentType<E>>(component: T) =>
    (props: E, index: number) =>
      React.createElement(
        component,
        { ...props, key: key ? props[key as keyof E] : index },
        []
      );
}
export const withIdKey = withKey("id");

/*

interface IBlockProps {
  title: string;
  id: string;
}
function Block(props: IBlockProps) {
  return <div>{props.title}</div>;
}
function Feed(props: { blocks: IBlockProps[] }) {
  return <div>{props.blocks.map(withIdKey(Block))}</div>;
}

*/
