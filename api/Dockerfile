# Use a imagem base do PHP com o módulo FPM
FROM php:8.2-fpm

# Instale as extensões necessárias do PHP
RUN apt-get update && apt-get install -y libpq-dev git zip unzip && docker-php-ext-install pdo pdo_pgsql

# Defina o diretório de trabalho
WORKDIR /var/www

# Instale as dependências do Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Exponha a porta do PHP-FPM
EXPOSE 9000

# Comando para rodar o PHP-FPM e instalar as dependências
ENTRYPOINT ["sh", "-c", "composer install && php-fpm"]
