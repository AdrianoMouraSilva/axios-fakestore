import { useEffect, useState } from "react";
import { api } from "../services/api";

// useEffect -> TECLADO F5 (INCIO DA PAGINA)
// useState -> ESPAÇO DE MEMORIA(INICIAR CONST)

export default function ProduList() {
    const [products, setProducts] = useState([]);

    // o segundo parametro é um array vazio, ou seja, ele vai executar apenas uma vez quando o componente for montado
    //useEffect(() => {}, []); 
    //.then -> quando a requisição for bem sucedida
    //.catch -> quando a requisição falhar

    useEffect(() => {
        api.get('/products')
            .then((response) => {
                setProducts(response.data);
            })
            .catch((error) => {
                console.error("Erro ao buscar produtos:", error);
            });
    }, []);

    



    return (
        <div >
            <h2>Produtos: </h2>
            {products.length === 0 && <p>Carregando...</p>}
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <strong>{product.title}</strong><br />                        
                        R$ {product.price} <br />
                        <img src={product.image} 
                        alt={product.title} 
                        width={100}
                        />
                    </li>

                ))}
            </ul>


        </div>
    );
}