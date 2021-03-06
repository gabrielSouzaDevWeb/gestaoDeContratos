-- This script was generated by a beta version of the ERD tool in pgAdmin 4.
-- Please log an issue at https://redmine.postgresql.org/projects/pgadmin4/issues/new if you find any bugs, including reproduction steps.
BEGIN;


CREATE TABLE IF NOT EXISTS public.prestadores
(
    id bigint NOT NULL GENERATED ALWAYS AS IDENTITY,
    tipo "char" NOT NULL,
    cpf character varying(14),
    cnpj character varying(18),
    nome character varying(50),
    razao_social character varying(50),
    email character varying(50) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public.prestadores_enderecos
(
    cep character varying NOT NULL,
    logradouro character varying NOT NULL,
    numero character varying NOT NULL,
    complemento character varying NOT NULL,
    bairro character varying NOT NULL,
    cidade character varying NOT NULL,
    uf character(2) NOT NULL,
    id bigint NOT NULL GENERATED ALWAYS AS IDENTITY,
    prestador_id bigint,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public.contratos
(
    id bigint NOT NULL GENERATED ALWAYS AS IDENTITY,
    prestador_id bigint,
    servico_prestado character varying NOT NULL,
    data_inicio date NOT NULL,
    data_fim date NOT NULL,
    PRIMARY KEY (id)
);

ALTER TABLE IF EXISTS public.prestadores_enderecos
    ADD CONSTRAINT prestadores_fk FOREIGN KEY (prestador_id)
    REFERENCES public.prestadores (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE CASCADE
    NOT VALID;


ALTER TABLE IF EXISTS public.contratos
    ADD CONSTRAINT prestador_fk FOREIGN KEY (prestador_id)
    REFERENCES public.prestadores (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;

END;