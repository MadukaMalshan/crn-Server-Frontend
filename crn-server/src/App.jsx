import { useEffect, useState } from 'react';
import './App.css';
import CustomerForm from './CustomerForm';
import CustomerList from './CustomerList';

function App() {
  const [customers, setCustomers] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/customer/all")
      .then((response) => response.json())
      .then((data) => {
        setCustomers(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleAddCustomer = (customer) => {
    fetch("http://localhost:8080/customer/save", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(customer),
    })
      .then((response) => response.json())
      .then((data) => {
        setCustomers([...customers, data]);
      });
  };

  const handleUpdateCustomer = (customer) => {
    fetch(`http://localhost:8080/customer/${customer.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(customer),
    })
      .then((response) => response.json())
      .then((data) => {
        setCustomers(
          customers.map((c) => (c.id === customer.id ? data : c))
        );
      });
  };

  const handleDeleteCustomer = (id) => {
    fetch(`http://localhost:8080/customer/${id}`, {
      method: "DELETE",
    }).then(() => {
      setCustomers(customers.filter((c) => c.id !== id));
    });
  };

  const handleEditCustomer = (customer) => {
    setSelectedCustomer(customer);
  };

  return (
    <>
      <h1>Customer Management</h1>
      <CustomerForm
        onAddCustomer={handleAddCustomer}
        onUpdateCustomer={handleUpdateCustomer}
        selectedCustomer={selectedCustomer}
      />
      <CustomerList
        customers={customers}
        onEdit={handleEditCustomer}
        onDelete={handleDeleteCustomer}
      />
    </>
  );
}

export default App;