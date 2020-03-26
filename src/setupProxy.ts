import proxy from 'http-proxy-middleware';

export default function(app: { use: (arg0: unknown) => void }) {
  app.use(
    proxy(`/api/v1/`, {
      target: `http://localhost:3001`,
      changeOrigin: true,
    }),
  );
}
