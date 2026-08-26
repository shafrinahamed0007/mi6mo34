const Links = ({ route }) => {
  return (
    <div>
      <li className="hover:bg-yellow-300 hover:text-black hover:p-2">
        <a href={route?.path}>{route?.name}</a>
      </li>
    </div>
  );
};

export default Links;
