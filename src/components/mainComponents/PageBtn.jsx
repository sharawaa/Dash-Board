import "../../styles/pagination.css";

export default function PageBtn(prop) {
  const { btnName, btnClass } = prop;
  return <button className={btnClass}>{btnName}</button>;
}
