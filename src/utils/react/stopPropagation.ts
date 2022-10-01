export function stopPropagation<T extends (e: any) => void>(fn: T) {
  console.log("stopPropagation");
  return <E extends React.SyntheticEvent<any>>(e: E) => {
    e.stopPropagation();
    fn(e);
  };
}

/*
function NotStandardLink(props: any) {
  return <a onClick={preventDefault(stopPropagation(props.onClick))}></a>;
}
*/
