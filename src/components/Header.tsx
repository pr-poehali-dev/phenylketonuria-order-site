import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Icon name="Heart" className="text-green-500" size={24} />
            <span className="text-xl font-semibold text-gray-900">
              PKU Здоровье
            </span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a
              href="#"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Главная
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              О заболевании
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Продукты
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Доставка
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Контакты
            </a>
          </nav>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Корзина
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
