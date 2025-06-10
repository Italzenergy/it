import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Solicitude {
  @PrimaryGeneratedColumn()
  id: number;

  // Mapeo EXPLÍCITO respetando mayúsculas y nombres exactos
  @Column({ name: 'typedocument' }) // Columna en minúsculas en la BD
  typedocument: string; // Propiedad en minúsculas para consistencia

  @Column({ name: 'numerodocumento' })
  numerodocumento: number;

  @Column({ name: 'Nombre' }) // Columna con 'N' mayúscula en la BD
  Nombre: string;

  @Column({ name: 'Telefono' }) // 'T' mayúscula
  Telefono: number;

  @Column({ name: 'monto' })
  monto: number;

  @Column({ name: 'cuotas' })
  cuotas: number;

  @Column({ name: 'cuotaMensual' }) // 'M' mayúscula
  cuotaMensual: number;

  @Column({ name: 'total' })
  total: number;
}