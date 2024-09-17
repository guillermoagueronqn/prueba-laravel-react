import React, {useState} from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const endpoint = 'http://localhost:8000/api/product';

const CreateProduct = () => {

    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);
    const [stock, setStock] = useState(0);
    const navigate = useNavigate();

    const store = async (event) => {
        event.preventDefault();
        await axios.post(endpoint, {description: description, price: price, stock: stock});
        navigate('/');
    }

    return (
        <div>
            <h1>Create Product</h1>
            <form onSubmit={store}>
                <div className="mb-3">
                    <label for="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                    <input type="text"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label for="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                    <input type="number"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label for="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Stock</label>
                    <input type="number"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        value={stock}
                        onChange={(e) => setStock(e.target.value)}/>
                </div>
                <button type="submit" className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" >Store</button>
            </form>
        </div>
    )
}

export default CreateProduct;