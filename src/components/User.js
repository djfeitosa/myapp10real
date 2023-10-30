const User = ({img, name, hobbies, realData, children}) => {
  return (
    <section>
      <img src={img} alt={name} />
      <h1>Name: {name}</h1>
      <h1>Hobbies: {hobbies}</h1>
      <p>{realData.name}</p>
      <p>{realData.location}</p>
      {children}
    </section>
  );
};

export default User;
