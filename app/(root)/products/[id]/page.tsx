import React from 'react'
interface Props {
    id: number
}
const ProductDetail = ({ params }: { params: Props }) => {
    const { id } = params
    return (
        <div>ProductDetail {id}</div>
    )
}

export default ProductDetail