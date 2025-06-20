import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Icon name="Heart" className="text-green-500" size={24} />
              <span className="text-xl font-semibold">PKU Здоровье</span>
            </div>
            <p className="text-gray-400">
              Специализированные продукты для здорового питания при
              фенилкетонурии
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Покупателям</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  Каталог
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Доставка
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Оплата
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Возврат
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Информация</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  О заболевании
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Диета при PKU
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Консультации
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Блог
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Контакты</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center space-x-2">
                <Icon name="Phone" size={16} />
                <span>8 (800) 123-45-67</span>
              </li>
              <li className="flex items-center space-x-2">
                <Icon name="Mail" size={16} />
                <span>info@pkuhealth.ru</span>
              </li>
              <li className="flex items-center space-x-2">
                <Icon name="MapPin" size={16} />
                <span>Москва, ул. Здоровья, 1</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 PKU Здоровье. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
