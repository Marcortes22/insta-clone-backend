import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphqlConfigService } from './graphql-config.service';

/**
 * 🎨 Custom Configuration Module
 *
 * Organiza todos los servicios de configuración personalizados
 * NO confundir con ConfigModule (oficial de @nestjs/config)
 *
 * ConfigModule (oficial) = Variables de entorno (.env)
 * ConfigurationModule (este) = Servicios que usan esas variables
 */
@Module({
  imports: [ConfigModule], // 👈 Importa el oficial para acceder a ConfigService
  providers: [GraphqlConfigService],
  exports: [GraphqlConfigService],
})
export class ConfigurationModule {}
