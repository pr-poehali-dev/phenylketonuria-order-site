import Icon from "@/components/ui/icon";

interface ProductCardProps {
  name: string;
  protein: number;
  price: number;
  weight: string;
  image: string;
  description: string;
}

const ProductCard = ({
  name,
  protein,
  price,
  weight,
  image,
  description,
}: ProductCardProps) => {
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
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
            <Icon name="Plus" size={16} />
            <span>В корзину</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
