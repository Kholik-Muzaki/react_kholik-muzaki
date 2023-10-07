import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CreateProduct from '../Pages/CreateProduct/CreateProduct';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'; 
import store from '../Store/index'; 

test('test untuk memastikan bahwa form input Product Name dapat menerima input teks dan menampilkannya di halaman', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <CreateProduct />
      </BrowserRouter>
    </Provider>
  );
  
  const productNameInput = screen.getByLabelText('Product Name');
  const testName = 'Test Product';
  fireEvent.change(productNameInput, { target: { value: testName } });
  expect(productNameInput.value).toBe(testName);
});

test('test untuk memastikan bahwa pilihan setiap form yang dipilih dapat disimpan dan ditampilkan dengan benar', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <CreateProduct />
      </BrowserRouter>
    </Provider>
  );
  const categorySelect = screen.getByLabelText('Product Category');
  const selectedCategory = 't-shirt';
  fireEvent.change(categorySelect, { target: { value: selectedCategory } });
  expect(categorySelect.value).toBe(selectedCategory);
});

// test('tes validasi product name tidak boleh kosong',() => {
//   render(
//     <Provider store={store}>
//       <BrowserRouter>
//         <CreateProduct />
//       </BrowserRouter>
//     </Provider>
//   );
//   const productNameInput = screen.getByLabelText('Product Name');
//   fireEvent.change(productNameInput, { target: { value: "" } });
//   const errorMessage = screen.getByText('Product name must be filled');
//   expect(errorMessage).toBeInTheDocument();
// });


test('tes validasi product name tidak boleh ada karakter spesial', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <CreateProduct />
      </BrowserRouter>
    </Provider>
  );
  const productNameInput = screen.getByLabelText('Product Name');
  fireEvent.change(productNameInput, { target: { value: 'Test@Product' } });
  const errorMessage = screen.getByText('Product name must not contains symbols');
  expect(errorMessage).toBeInTheDocument();
});

test('tes product name tidak boleh melebihi 25 karakter', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <CreateProduct />
      </BrowserRouter>
    </Provider>
  );
  const productNameInput = screen.getByLabelText('Product Name');
  fireEvent.change(productNameInput, { target: { value: 'ThisProductNameIsTooLongToPassTheValidation' } });
  const errorMessage = screen.getByText('Product name must not exceed 25 characters');
  expect(errorMessage).toBeInTheDocument();
});

test('tes validasi semua form tidak boleh kosong', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <CreateProduct />
      </BrowserRouter>
    </Provider>
  );
  const submitButton = screen.getByText('Submit');
  fireEvent.click(submitButton);
  const errorMessage = screen.queryByText('form is not valid');
  expect(errorMessage).toBeInTheDocument();
});
