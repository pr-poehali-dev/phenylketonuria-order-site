import Icon from "@/components/ui/icon";

const Benefits = () => {
  const benefits = [
    {
      icon: "Shield",
      title: "Сертифицированные продукты",
      description:
        "Все товары прошли медицинскую сертификацию и безопасны для диеты PKU",
    },
    {
      icon: "Calculator",
      title: "Точный расчет белка",
      description: "Подсчет содержания фенилаланина с точностью до миллиграмма",
    },
    {
      icon: "Truck",
      title: "Быстрая доставка",
      description:
        "Доставляем свежие продукты по всей России в течение 1-3 дней",
    },
    {
      icon: "Users",
      title: "Поддержка экспертов",
      description: "Консультации диетологов и специалистов по питанию PKU",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Почему выбирают нас
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <Icon
                name={benefit.icon as any}
                className="text-blue-600 mx-auto mb-4"
                size={40}
              />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
