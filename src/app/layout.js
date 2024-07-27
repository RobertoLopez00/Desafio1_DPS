import { CartProvider } from './components/CartContext';
import './global.css'; // Importa tus estilos globales aquí

export default function RootLayout({ children }) {
  return (
    <CartProvider>
      <html lang="en">
        <body>
          {children}
        </body>
      </html>
    </CartProvider>
  );
}
