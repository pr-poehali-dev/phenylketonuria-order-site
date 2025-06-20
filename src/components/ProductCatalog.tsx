import ProductCard from "./ProductCard";

const ProductCatalog = () => {
  const products = [
    {
      name: "Хлеб безбелковый",
      protein: 0.5,
      price: 180,
      weight: "400г",
      image:
        "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400",
      description: "Специальный хлеб с минимальным содержанием белка",
    },
    {
      name: "Макароны низкобелковые",
      protein: 0.8,
      price: 220,
      weight: "500г",
      image: "https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?w=400",
      description: "Паста из специальной муки для диеты PKU",
    },
    {
      name: "Печенье безбелковое",
      protein: 0.3,
      price: 160,
      weight: "200г",
      image:
        "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400",
      description: "Сладкое лакомство без фенилаланина",
    },
    {
      name: "Смесь протеиновая PKU",
      protein: 0.0,
      price: 1200,
      weight: "500г",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400",
      description: "Специальная аминокислотная смесь для PKU",
    },
    {
      name: "Мука безбелковая",
      protein: 0.6,
      price: 320,
      weight: "1000г",
      image:
        "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400",
      description: "Мука для домашней выпечки",
    },
    {
      name: "Каша быстрого приготовления",
      protein: 0.4,
      price: 95,
      weight: "250г",
      image:
        "https://images.unsplash.com/photo-1517909711878-316d8481ea34?w=400",
      description: "Питательная каша с низким белком",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Каталог продуктов
          </h2>
          <p className="text-lg text-gray-600">
            Все продукты сертифицированы и безопасны для людей с PKU
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCatalog;
