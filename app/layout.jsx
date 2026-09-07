import './globals.css';

export const metadata = {
  title: 'Motoapp',
  description: 'La moto que quieres, los días que la necesitas.',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0B0D10',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,400;0,500;0,600;0,700;1,700&family=Racing+Sans+One&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
