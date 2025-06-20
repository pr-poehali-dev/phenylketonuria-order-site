import Icon from "@/components/ui/icon";

const Reviews = () => {
  const reviews = [
    {
      name: "Анна Петрова",
      text: "Наконец-то нашли магазин, где можно безопасно покупать продукты для нашего сына. Очень довольны качеством!",
      rating: 5,
    },
    {
      name: "Михаил Сидоров",
      text: "Отличный ассортимент и точная информация о составе. Доставка всегда в срок.",
      rating: 5,
    },
    {
      name: "Елена Иванова",
      text: "Спасибо за заботу о людях с PKU. Продукты вкусные, и дети едят с удовольствием.",
      rating: 5,
    },
  ];

  return (
    <section className="py-16 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Отзывы покупателей
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Icon
                    key={i}
                    name="Star"
                    className="text-yellow-400 fill-current"
                    size={20}
                  />
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">"{review.text}"</p>
              <p className="font-semibold text-gray-900">— {review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
