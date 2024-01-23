export default function Dropdown(props) {
  const users = props.users;
  const myUser = users.map((item) => (
    <option  key={item} value={item}>
      {item}
    </option>
  ));

  return (
    <div>
      <div>
        <select
          id="user"
          className="focus:outline-none "
        >
          {myUser}
        </select>
      </div>
    </div>
  );
}
