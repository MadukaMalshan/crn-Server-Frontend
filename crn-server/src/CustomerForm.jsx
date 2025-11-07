import { useState, useEffect } from 'react';

function CustomerForm({ onAddCustomer, onUpdateCustomer, selectedCustomer }) {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [salary, setSalary] = useState('');

  useEffect(() => {
    if (selectedCustomer) {
      setId(selectedCustomer.id);
      setName(selectedCustomer.name);
      setAddress(selectedCustomer.address);
      setSalary(selectedCustomer.salary);
    } else {
      setId('');
      setName('');
      setAddress('');
      setSalary('');
    }
  }, [selectedCustomer]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedCustomer) {
      onUpdateCustomer({ id, name, address, salary });
    } else {
      onAddCustomer({ name, address, salary });
    }
    setId('');
    setName('');
    setAddress('');
    setSalary('');
  };

  return (
    <form onSubmit={handleSubmit}>
      {selectedCustomer && (
        <input
          type="text"
          placeholder="ID"
          value={id}
          readOnly
        />
      )}
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <input
        type="text"
        placeholder="Salary"
        value={salary}
        onChange={(e) => setSalary(e.target.value)}
      />
      <button type="submit">{selectedCustomer ? 'Update Customer' : 'Add Customer'}</button>
    </form>
  );
}

export default CustomerForm;