import { useState } from "react";
import Icon from "@/components/ui/icon";

interface ProductCardProps {
  id: string;
  name: string;
  protein: number;
  price: number;
  weight: string;
  image: string;
  description: string;
  onAddToCart: (product: {
    id: string;
    name: string;
    price: number;
    image: string;
  }) => void;
}

const ProductCard = ({
  id,
  name,
  protein,
  price,
  weight,
  image,
  description,
  onAddToCart,
}: ProductCardProps) => {
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = () => {
    setIsAdding(true);
    onAddToCart({ id, name, price, image });
    setTimeout(() => setIsAdding(false), 800);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{name}</h3>
        <p className="text-gray-600 mb-4">{description}</p>

        <div className="flex justify-between items-center mb-4">
          <div className="bg-green-100 px-3 py-1 rounded-full">
            <span className="text-green-800 text-sm font-medium">
              {protein}г белка на 100г
            </span>
          </div>
          <span className="text-gray-500 text-sm">{weight}</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-gray-900">{price}₽</span>
          <button
            onClick={handleAddToCart}
            disabled={isAdding}
            className={`px-4 py-2 rounded-lg transition-colors flex items-center space-x-2 ${
              isAdding
                ? "bg-green-600 text-white"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
          >
            <Icon name={isAdding ? "Check" : "Plus"} size={16} />
            <span>{isAdding ? "Добавлено" : "В корзину"}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
