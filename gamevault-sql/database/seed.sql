USE gamevault;
SET NAMES utf8mb4;
SET CHARACTER SET utf8mb4;

-- Limpieza preventiva
TRUNCATE TABLE games;
TRUNCATE TABLE admin_notes;

-- Inserción de 15 videojuegos ficticios o con datos públicos
INSERT INTO games (title, description, genre, platform, release_year, developer, rating, image) VALUES
('Minecraft', 'Un juego de construcción de bloques en mundo abierto donde la creatividad es el límite.', 'Sandbox', 'PC, Console, Mobile', 2011, 'Mojang Studios', '4.8', 'https://cdn.cloudflare.steamstatic.com/steam/apps/1672970/header.jpg'),
('Grand Theft Auto V', 'Un drama criminal de mundo abierto ambientado en la ficticia ciudad de Los Santos.', 'Acción / Aventura', 'PC, PlayStation, Xbox', 2013, 'Rockstar Games', '4.9', 'https://cdn.cloudflare.steamstatic.com/steam/apps/271590/header.jpg'),
('The Legend of Zelda: Breath of the Wild', 'Viaja por los campos y ruinas de Hyrule en esta aventura inolvidable.', 'Aventura / RPG', 'Nintendo Switch, Wii U', 2017, 'Nintendo', '4.9', 'https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/en_US/games/switch/t/the-legend-of-zelda-breath-of-the-wild-switch/hero'),
('Elden Ring', 'Un juego de rol de acción épico ambientado en las Tierras Intermedias.', 'Action RPG', 'PC, PlayStation, Xbox', 2022, 'FromSoftware', '4.8', 'https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/header.jpg'),
('Hollow Knight', 'Una aventura de acción clásica en 2D sobre un mundo de insectos y héroes.', 'Metroidvania', 'PC, Nintendo Switch, PS4, Xbox', 2017, 'Team Cherry', '4.7', 'https://cdn.cloudflare.steamstatic.com/steam/apps/367520/header.jpg'),
('God of War', 'Kratos y su hijo Atreus se adentran en las tierras nórdicas para cumplir una misión personal.', 'Acción / Aventura', 'PlayStation, PC', 2018, 'Santa Monica Studio', '4.9', 'https://cdn.cloudflare.steamstatic.com/steam/apps/1593500/header.jpg'),
('Cyberpunk 2077', 'Un RPG de acción en mundo abierto en la metrópolis de Night City.', 'RPG / Ciberpunk', 'PC, PlayStation, Xbox', 2020, 'CD Projekt Red', '4.3', 'https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/header.jpg'),
('Red Dead Redemption 2', 'Una épica historia sobre la vida en el implacable corazón de América.', 'Acción / Aventura', 'PC, PlayStation, Xbox', 2018, 'Rockstar Games', '4.9', 'https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/header.jpg'),
('Super Mario Odyssey', 'Acompaña a Mario en una aventura tridimensional para rescatar a la Princesa Peach.', 'Plataformas', 'Nintendo Switch', 2017, 'Nintendo', '4.8', 'https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/en_US/games/switch/s/super-mario-odyssey-switch/hero'),
('Fortnite', 'Un juego de batalla campal gratuito con construcción y constantes colaboraciones.', 'Battle Royale', 'PC, Consolas, Mobile', 2017, 'Epic Games', '4.2', 'https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg'),
('The Witcher 3: Wild Hunt', 'Geralt de Rivia busca a la niña de la profecía en un mundo devastado.', 'RPG', 'PC, PlayStation, Xbox, Switch', 2015, 'CD Projekt Red', '4.9', 'https://cdn.cloudflare.steamstatic.com/steam/apps/292030/header.jpg'),
('Valorant', 'Juego de disparos tactico 5v5 basado en personajes unicos y habilidades.', 'FPS Tactico', 'PC', 2020, 'Riot Games', '4.4', 'https://www.riotgames.com/darkroom/1200/1dbd7211e78ce5faa7a8af9d10afad47:2b5979e3922758399ba389561e797919/ps-f2p-val-console-launch-16x9.jpg'),
('Stardew Valley', 'Hereda la vieja parcela de tu abuelo y transforma el terreno en una próspera granja.', 'Simulación / RPG', 'PC, Consolas, Mobile', 2016, 'ConcernedApe', '4.8', 'https://cdn.cloudflare.steamstatic.com/steam/apps/413150/header.jpg'),
('Portal 2', 'Aventuras y acertijos basados en físicas avanzadas utilizando la pistola de portales.', 'Acertijos / Puzzle', 'PC, Xbox, PlayStation', 2011, 'Valve', '4.9', 'https://cdn.cloudflare.steamstatic.com/steam/apps/620/header.jpg'),
('Apex Legends', 'Battle royale de escuadrones con héroes con habilidades únicas compitiendo por la gloria.', 'Battle Royale / FPS', 'PC, Consolas', 2019, 'Respawn Entertainment', '4.5', 'https://cdn.cloudflare.steamstatic.com/steam/apps/1172470/header.jpg');

-- Inserción de registros confidenciales simulados para el laboratorio
INSERT INTO admin_notes (note, internal_code) VALUES
('CLAVE_DB_RESPALDO: local_admin_pass_2026!', 'CONFIDENTIAL_DB_KEY_01'),
('SERVIDOR_SSH: 192.168.1.100 - USER: root_vault', 'INTERNAL_NET_NOTE_02'),
('TOKEN_API_PAGOS: sk_test_51Mz9821839812938129', 'PAYMENT_GATEWAY_TOKEN'),
('REVISION_SEGURIDAD: Recordar actualizar el backend antes de pasar a producción.', 'AUDIT_FLAG_99');