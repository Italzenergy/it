import { Controller, Get, Post, Body, Patch, Param, Delete,HttpException, HttpStatus } from '@nestjs/common';
import { SolicitudesService } from './solicitudes.service';
import { CreateSolicitudeDto } from './dto/create-solicitude.dto';
import { UpdateSolicitudeDto } from './dto/update-solicitude.dto';


@Controller('solicitudes')
export class SolicitudesController {
  constructor(private readonly solicitudesService: SolicitudesService) {}


// En el controlador de NestJS
// solicitudes.controller.ts
@Post()
async create(@Body() createSolicitudeDto: CreateSolicitudeDto) {
  try {
    const solicitud = await this.solicitudesService.create(createSolicitudeDto);
    return { success: true, data: solicitud };
  } catch (error) {
    // Devuelve un error estructurado
    throw new HttpException(
      { success: false, message: "Error al guardar los datos" },
      HttpStatus.INTERNAL_SERVER_ERROR,
    );
  }
}
  @Get()
  findAll() {
    return this.solicitudesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.solicitudesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSolicitudeDto: UpdateSolicitudeDto) {
    return this.solicitudesService.update(+id, updateSolicitudeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.solicitudesService.remove(+id);
  }
}
