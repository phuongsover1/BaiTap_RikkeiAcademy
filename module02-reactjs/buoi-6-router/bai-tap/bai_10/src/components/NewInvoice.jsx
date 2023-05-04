const NewInvoice = () => {
  return (
    <div>
      New Invoice Page.
      <form>
        <label htmlFor='invoice-name'>Name:</label>
        <input
          type='text'
          name='invoiceName'
          id='invoice-name'
          placeholder='Enter invoice name'
        />
        <br />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default NewInvoice;
