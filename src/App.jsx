
const Header =({title})=>{
  return <div className="header">{title}</div>
};

const InnerContainer = ({ name, email, phone }) => {
  return (
    <div className="inner-container container-fluid">
      <p><i className="fas fa-user"></i>Name: {name}</p>
      <p><i className="fas fa-envelope"></i>"Email: {email}</p>
      <p><i className="fas fa-phone"></i> Phone: {phone}</p>
    </div>
  );
};

const MainContainer = ({ data }) => {
  return (
    < div className="main-container fluid-container">
      {data.length === 0 ? (
        <p>No data available.</p>
      ) : (
        data.map((item) => (
          <InnerContainer
            key={item.id}
            name={item.name}
            email={item.email}
            phone={item.phone}
          />
        ))
      )}
    </div>
  );
};

const Footer = () => {
  return <div className="footer">© 2023 My Directory App</div>;
};

function App() {
  const directoryData = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', phone: '123-456-7890' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', phone: '987-654-3210' },
    { id: 3, name: 'Mike Johnson', email: 'mike.johnson@example.com', phone: '555-555-5555' },
    { id: 4, name: 'Andrew Johnson', email: 'andrew.johnson@example.com', phone: '555-464-5555' },
    { id: 5, name: 'John Williams', email: 'john.williams@example.com', phone: '123-456-7890' },
    { id: 6, name: 'Jane Williams', email: 'jane.williams@example.com', phone: '987-654-3210' },
    { id: 7, name: 'Mike Williams', email: 'mike.williams@example.com', phone: '555-555-5555' },
    { id: 8, name: 'Andrew Williams', email: 'andrew.williams@example.com', phone: '555-464-5555' },
    { id: 9, name: 'Andrew Doe', email: 'andrew.doe@example.com', phone: '123-456-7890' },
    { id: 10, name: 'Andy Doe', email: 'andy.doe@example.com', phone: '987-654-3210' },

  ];

  return (
    <div className="app">
      <Header title="My Directory App" />
      <MainContainer data={directoryData} />
      <Footer />
    </div>
  );
}


export default App
