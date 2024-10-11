import "./assignment.css"

const obj = {
    id: "10002",
    name: "Eco-Friendly Watter Bottle",
    description: 'Stay hydrated with our durable, eco-friendly water bottle.',
    price: 14.99,
    currency: "USD",
    imageURL: 'https://example.com/images/product-10002.jpg',
}

const keyValuePairs = Object.entries(obj).reduce((acc, [key, value], index) => {
    acc.push({ key, value, position: index })
    return acc
}, [])

const List = () => (
    <div className="assignment-container">
        <table>
            <thead>
                <tr>
                    <th>Key</th>
                    <th>Value</th>
                    <th>Position</th>
                </tr>
            </thead>
            <tbody>
                {keyValuePairs.map(({ key, value, position }, index) => (
                    <tr key={key}>
                        <td>{key}</td>
                        <td>{value}</td>
                        <td>{position}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
)

export default function Assignment() {
    return (
        <List />
    )
}