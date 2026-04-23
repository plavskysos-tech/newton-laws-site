import { useState } from 'react';
import Icon from '@/components/ui/icon';

interface NavigationProps {
  activeSection: string;
  scrollProgress: number;
  scrollToSection: (id: string) => void;
}

const Navigation = ({ activeSection, scrollProgress, scrollToSection }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { id: 'home', label: 'Главная' },
    { id: 'laws', label: 'Законы' },
    { id: 'examples', label: 'Примеры' },
    { id: 'videos', label: 'Видеоопыты' }
  ];

  const handleClick = (id: string) => {
    scrollToSection(id);
    setIsOpen(false);
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 backdrop-blur-sm border-b z-50"
      style={{
        background: scrollProgress < 0.5 ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.95)'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-lg sm:text-2xl font-bold text-primary">Законы Ньютона</h1>

          <div className="hidden md:flex gap-4 lg:gap-8">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => handleClick(link.id)}
                className={`text-sm font-medium transition-all duration-300 hover:text-primary hover:scale-110 ${
                  activeSection === link.id ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <button
            className="md:hidden p-2 rounded-md hover:bg-white/20 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Меню"
            style={{
              color: scrollProgress < 0.5 ? 'white' : 'hsl(220, 20%, 10%)'
            }}
          >
            <Icon name={isOpen ? 'X' : 'Menu'} size={26} />
          </button>
        </div>

        <div
          className="md:hidden overflow-hidden transition-all duration-300"
          style={{
            maxHeight: isOpen ? '280px' : '0px',
            opacity: isOpen ? 1 : 0
          }}
        >
          <div className="flex flex-col gap-1 pt-4 pb-2">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => handleClick(link.id)}
                className={`text-left text-base font-medium py-3 px-4 rounded-lg transition-all ${
                  activeSection === link.id
                    ? 'text-primary bg-primary/10'
                    : 'text-muted-foreground hover:bg-white/10'
                }`}
                style={{
                  color:
                    activeSection === link.id
                      ? undefined
                      : scrollProgress < 0.5
                      ? 'rgba(255,255,255,0.9)'
                      : undefined
                }}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
