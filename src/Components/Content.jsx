import samsung from '../Assets/samsung.jpeg'
import nokia from '../Assets/Nokia.jpeg'
import iphone from '../Assets/iphone.png'
import pixel from '../Assets/pixel.png'
import asus from '../Assets/asus.png'
import huawei from '../Assets/huawei.jpg'
import ProductList from "./ProductList"

export default function Content() {
    const products = [
        {
            id:1,
            title: 'Samsung',
            description: 'Description for Samsung',
            image: samsung,
        },
        {
            id:2,
            title: 'Nokia',
            description: 'Description for Nokia',
            image: nokia,
        },
        {
            id:3,
            title: 'Iphone',
            description: 'Description for Iphone',
            image: iphone,
        },
        {
            id:4,
            title: 'Google Pixel',
            description: 'Description for Google Pixel',
            image: pixel,
        },
        {
            id:5,
            title: 'Asus',
            description: 'Description for Asus',
            image: asus,
        },
        {
            id:6,
            title: 'Huawei',
            description: 'Description for Huawei',
            image: huawei,
        },

    ]
    return (
        <main>
            <section>
                <ProductList products={products} />
            </section>
        </main>
    )
}