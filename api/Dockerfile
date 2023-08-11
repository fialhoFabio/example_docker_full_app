# Use a imagem base do PHP com o módulo FPM
FROM php:8.2-fpm

# Instale as extensões necessárias do PHP
RUN apt-get update && apt-get install -y libpq-dev && docker-php-ext-install pdo pdo_pgsql

# Defina o diretório de trabalho
WORKDIR /var/www

# Copie os arquivos do seu projeto para o container
COPY . .

# Instale as dependências do Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
RUN composer install

# Exponha a porta do PHP-FPM
EXPOSE 9000

# Comando para rodar o PHP-FPM
CMD ["php-fpm"]
