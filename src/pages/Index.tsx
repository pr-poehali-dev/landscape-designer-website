import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  const services = [
    {
      icon: 'Flower',
      title: 'Проектирование садов',
      description: 'Создание уникальных ландшафтных проектов с учётом особенностей участка'
    },
    {
      icon: 'TreePine',
      title: 'Озеленение территорий',
      description: 'Подбор и высадка растений для создания гармоничного пространства'
    },
    {
      icon: 'Droplets',
      title: 'Системы полива',
      description: 'Проектирование и установка автоматических систем полива'
    },
    {
      icon: 'Lightbulb',
      title: 'Садовое освещение',
      description: 'Создание атмосферного освещения для вечернего сада'
    }
  ];

  const portfolio = [
    {
      title: 'Частный сад в Подмосковье',
      description: 'Классический английский стиль с розарием',
      area: '15 соток'
    },
    {
      title: 'Городской двор',
      description: 'Современный минимализм с хвойными растениями',
      area: '8 соток'
    },
    {
      title: 'Коттеджный поселок',
      description: 'Природный стиль с использованием местных растений',
      area: '25 соток'
    }
  ];

  const pricing = [
    { service: 'Консультация на участке', price: '5 000 ₽' },
    { service: 'Эскизный проект', price: '300 ₽/м²' },
    { service: 'Рабочий проект', price: '500 ₽/м²' },
    { service: 'Авторский надзор', price: '10% от стоимости работ' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-nature-green-pale to-white">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm shadow-sm fixed w-full top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex justify-between items-center">
            <h1 className="font-display text-2xl font-bold text-primary">GreenDesign</h1>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-primary transition-colors">Главная</a>
              <a href="#services" className="text-gray-700 hover:text-primary transition-colors">Услуги</a>
              <a href="#portfolio" className="text-gray-700 hover:text-primary transition-colors">Портфолио</a>
              <a href="#about" className="text-gray-700 hover:text-primary transition-colors">О нас</a>
              <a href="#pricing" className="text-gray-700 hover:text-primary transition-colors">Прайс</a>
              <a href="#contacts" className="text-gray-700 hover:text-primary transition-colors">Контакты</a>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <h1 className="font-display text-5xl md:text-6xl font-bold text-primary mb-6">
              Ландшафтный дизайн
              <span className="text-primary-light"> вашей мечты</span>
            </h1>
            <p className="font-body text-xl text-gray-600 mb-8 leading-relaxed">
              Создаём уникальные садовые пространства, которые радуют глаз и душу. 
              Профессиональный подход к проектированию и воплощению ваших идей.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary-light text-white px-8 py-4 text-lg">
                <Icon name="Phone" className="mr-2" size={20} />
                Консультация
              </Button>
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 text-lg">
                <Icon name="Eye" className="mr-2" size={20} />
                Смотреть работы
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold text-primary mb-4">Наши услуги</h2>
            <p className="font-body text-gray-600 text-lg">Комплексный подход к созданию садовых пространств</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow animate-scale-in border-0 shadow-md">
                <div className="text-center">
                  <div className="bg-nature-green-pale w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={service.icon} size={32} className="text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
                  <p className="font-body text-gray-600">{service.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 bg-nature-green-pale">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold text-primary mb-4">Портфолио</h2>
            <p className="font-body text-gray-600 text-lg">Реализованные проекты наших клиентов</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="h-48 bg-gradient-to-br from-primary-light to-primary-lighter relative">
                  <img 
                    src={`/img/${index === 0 ? '705a95fd-c6ac-4c06-b875-27dace8f7d1a.jpg' : index === 1 ? '99c775ad-3b21-4e1c-9add-9115e082b0ed.jpg' : '9a3e9f00-899c-47c1-8e39-418e644f892c.jpg'}`}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                  <p className="font-body text-gray-600 mb-3">{project.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="font-body text-sm text-primary font-medium">Площадь: {project.area}</span>
                    <Button variant="ghost" size="sm" className="text-primary hover:bg-primary hover:text-white">
                      <Icon name="ArrowRight" size={16} />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-4xl font-bold text-primary mb-6">О компании</h2>
            <p className="font-body text-lg text-gray-600 mb-8 leading-relaxed">
              Мы — команда профессионалов с более чем 10-летним опытом в области ландшафтного дизайна. 
              Наша миссия — создавать гармоничные пространства, где природа и архитектура существуют в идеальном балансе.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Award" size={32} />
                </div>
                <h3 className="font-display text-2xl font-bold text-primary mb-2">120+</h3>
                <p className="font-body text-gray-600">Реализованных проектов</p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" size={32} />
                </div>
                <h3 className="font-display text-2xl font-bold text-primary mb-2">98%</h3>
                <p className="font-body text-gray-600">Довольных клиентов</p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Clock" size={32} />
                </div>
                <h3 className="font-display text-2xl font-bold text-primary mb-2">10+</h3>
                <p className="font-body text-gray-600">Лет опыта</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 bg-nature-green-pale">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold text-primary mb-4">Прайс-лист</h2>
            <p className="font-body text-gray-600 text-lg">Прозрачная система ценообразования</p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="overflow-hidden shadow-lg">
              {pricing.map((item, index) => (
                <div key={index} className={`flex justify-between items-center p-6 ${index !== pricing.length - 1 ? 'border-b' : ''}`}>
                  <span className="font-body text-gray-800 font-medium">{item.service}</span>
                  <span className="font-display text-lg font-bold text-primary">{item.price}</span>
                </div>
              ))}
            </Card>
            
            <div className="text-center mt-8">
              <Button size="lg" className="bg-primary hover:bg-primary-light text-white px-8 py-4">
                <Icon name="Calculator" className="mr-2" size={20} />
                Рассчитать проект
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold text-primary mb-4">Контакты</h2>
            <p className="font-body text-gray-600 text-lg">Свяжитесь с нами для консультации</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 border-0 shadow-lg">
                <h3 className="font-display text-2xl font-bold text-primary mb-6">Свяжитесь с нами</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Icon name="Phone" className="text-primary mr-3" size={20} />
                    <span className="font-body text-gray-700">+7 (495) 123-45-67</span>
                  </div>
                  
                  <div className="flex items-center">
                    <Icon name="Mail" className="text-primary mr-3" size={20} />
                    <span className="font-body text-gray-700">info@greendesign.ru</span>
                  </div>
                  
                  <div className="flex items-center">
                    <Icon name="MapPin" className="text-primary mr-3" size={20} />
                    <span className="font-body text-gray-700">Москва, ул. Садовая, 15</span>
                  </div>
                  
                  <div className="flex items-center">
                    <Icon name="Clock" className="text-primary mr-3" size={20} />
                    <span className="font-body text-gray-700">Пн-Пт: 9:00-18:00</span>
                  </div>
                </div>

                <div className="mt-8">
                  <Button className="w-full bg-primary hover:bg-primary-light text-white">
                    <Icon name="MessageCircle" className="mr-2" size={20} />
                    Написать в WhatsApp
                  </Button>
                </div>
              </Card>

              <Card className="p-8 border-0 shadow-lg bg-gradient-to-br from-nature-green-pale to-white">
                <h3 className="font-display text-2xl font-bold text-primary mb-6">Бесплатная консультация</h3>
                <p className="font-body text-gray-600 mb-6">
                  Оставьте заявку, и наш специалист свяжется с вами в течение часа для обсуждения вашего проекта.
                </p>
                
                <ul className="space-y-3 font-body text-gray-600">
                  <li className="flex items-center">
                    <Icon name="Check" className="text-primary mr-3" size={16} />
                    Выезд на участок бесплатно
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="text-primary mr-3" size={16} />
                    Подробная консультация специалиста
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="text-primary mr-3" size={16} />
                    Предварительная смета
                  </li>
                </ul>

                <Button variant="outline" className="w-full mt-6 border-primary text-primary hover:bg-primary hover:text-white">
                  <Icon name="Calendar" className="mr-2" size={20} />
                  Записаться на консультацию
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="font-display text-2xl font-bold mb-4">GreenDesign</h3>
            <p className="font-body text-primary-foreground/80 mb-6">
              Создаём сады, которые вдохновляют
            </p>
            
            <div className="flex justify-center space-x-6 mb-6">
              <a href="#" className="hover:text-primary-light transition-colors">
                <Icon name="Instagram" size={24} />
              </a>
              <a href="#" className="hover:text-primary-light transition-colors">
                <Icon name="Facebook" size={24} />
              </a>
              <a href="#" className="hover:text-primary-light transition-colors">
                <Icon name="Youtube" size={24} />
              </a>
            </div>
            
            <p className="font-body text-primary-foreground/60 text-sm">
              © 2024 GreenDesign. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;