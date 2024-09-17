import React, {useState, useEffect} from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const ShowProducts = () => {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    useEffect( () => {
        getAllProducts();
    }, []);
    
    const getAllProducts = async () => {
        const response = await axios.get('http://localhost:8000/api/products');
        setProducts(response.data)
    }

    const deleteProduct = async (id) => {
        await axios.delete(`http://localhost:8000/api/product/${id}`);
        getAllProducts();
    }


    return (
        <div>
            <div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => navigate('/create')}>Create</button>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Stock</th>
                        <th>Actions</th>

                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.id}>
                            <td>{product.description}</td>
                            <td>{product.price}</td>
                            <td>{product.stock}</td>
                            <td>
                                <button className="bg-yellow-400 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => navigate(`/edit/${product.id}`)}>Edit</button>
                                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => deleteProduct(product.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ShowProducts;