import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function Solicitudes() {
  const app = await NestFactory.create(AppModule);
  //
  app.enableCors({
  origin: 'http://localhost:3000', // URL de tu frontend
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  });
  await app.listen(process.env.PORT ?? 3001);
  console.log("Microservicio Solicitud iniciado y escuchando")
}
Solicitudes();
