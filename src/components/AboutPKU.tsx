import Icon from "@/components/ui/icon";

const AboutPKU = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Что такое фенилкетонурия?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            PKU — это генетическое заболевание, при котором организм не может
            правильно расщеплять аминокислоту фенилаланин, содержащуюся в белке.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 rounded-lg bg-blue-50">
            <Icon
              name="Info"
              className="text-blue-600 mx-auto mb-4"
              size={32}
            />
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Диагностика
            </h3>
            <p className="text-gray-600">
              PKU диагностируется при рождении через скрининг новорожденных
            </p>
          </div>

          <div className="text-center p-6 rounded-lg bg-green-50">
            <Icon
              name="Apple"
              className="text-green-600 mx-auto mb-4"
              size={32}
            />
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Питание
            </h3>
            <p className="text-gray-600">
              Строгая диета с ограничением белка — основа лечения PKU
            </p>
          </div>

          <div className="text-center p-6 rounded-lg bg-purple-50">
            <Icon
              name="Heart"
              className="text-purple-600 mx-auto mb-4"
              size={32}
            />
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Жизнь</h3>
            <p className="text-gray-600">
              При правильном питании люди с PKU живут полноценной жизнью
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPKU;
