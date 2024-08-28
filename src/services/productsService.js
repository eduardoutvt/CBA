const API_URL = 'http://52.14.215.15:5000/api/products';

const getProducts = async () => {
  try {
    const response = await fetch(API_URL);
    return await response.json();
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

const addProduct = async (product) => {
  try {
    const response = await fetch(`${API_URL}/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product),
    });
    return await response.json();
  } catch (error) {
    console.error('Error adding product:', error);
    throw error;
  }
};

const updateProduct = async (id, product) => {
  try {
    const response = await fetch(`${API_URL}/update/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product),
    });
    return await response.json();
  } catch (error) {
    console.error('Error updating product:', error);
    throw error;
  }
};

const deleteProduct = async (id) => {
  try {
    await fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
    });
  } catch (error) {
    console.error('Error deleting product:', error);
    throw error;
  }
};

export default {
  getProducts,
  addProduct,
  updateProduct,
  deleteProduct,
};
