create table usuarios (
id SERIAL PRIMARY KEY,
usuario varchar(50) not null,
email text not null,
senha text not null,
conta_ativa boolean not null
);

create table conta(
usuario_id references usuarios(id)
nariCoin integer 
); 



CREATE TABLE categorias (
id SERIAL PRIMARY KEY UNIQUE,
categoria text NOT NULL
);

CREATE TABLE transacoes (
id SERIAL PRIMARY KEY UNIQUE,
usuario_id SERIAL REFERENCES usuarios(id) NOT NULL,
categoria_id SERIAL REFERENCES categorias(id) NOT NULL,
valor INTEGER NOT NULL
data timestamp now()
);