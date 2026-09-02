USE gamevault;

-- Limpieza preventiva
TRUNCATE TABLE games;
TRUNCATE TABLE admin_notes;

-- Inserción de 15 videojuegos ficticios o con datos públicos
INSERT INTO games (title, description, genre, platform, release_year, developer, rating, image) VALUES
('Minecraft', 'Un juego de construcción de bloques en mundo abierto donde la creatividad es el límite.', 'Sandbox', 'PC, Console, Mobile', 2011, 'Mojang Studios', '4.8', 'https://images.unsplash.com/photo-1627856013091-fed6e4e30025?w=500&q=80'),
('Grand Theft Auto V', 'Un drama criminal de mundo abierto ambientado en la ficticia ciudad de Los Santos.', 'Acción / Aventura', 'PC, PlayStation, Xbox', 2013, 'Rockstar Games', '4.9', 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=500&q=80'),
('The Legend of Zelda: Breath of the Wild', 'Viaja por los campos y ruinas de Hyrule en esta aventura inolvidable.', 'Aventura / RPG', 'Nintendo Switch, Wii U', 2017, 'Nintendo', '4.9', 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=500&q=80'),
('Elden Ring', 'Un juego de rol de acción épico ambientado en las Tierras Intermedias.', 'Action RPG', 'PC, PlayStation, Xbox', 2022, 'FromSoftware', '4.8', 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=500&q=80'),
('Hollow Knight', 'Una aventura de acción clásica en 2D sobre un mundo de insectos y héroes.', 'Metroidvania', 'PC, Nintendo Switch, PS4, Xbox', 2017, 'Team Cherry', '4.7', 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=500&q=80'),
('God of War', 'Kratos y su hijo Atreus se adentran en las tierras nórdicas para cumplir una misión personal.', 'Acción / Aventura', 'PlayStation, PC', 2018, 'Santa Monica Studio', '4.9', 'https://images.unsplash.com/photo-1580234811497-9df7fd2f357e?w=500&q=80'),
('Cyberpunk 2077', 'Un RPG de acción en mundo abierto en la metrópolis de Night City.', 'RPG / Ciberpunk', 'PC, PlayStation, Xbox', 2020, 'CD Projekt Red', '4.3', 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=500&q=80'),
('Red Dead Redemption 2', 'Una épica historia sobre la vida en el implacable corazón de América.', 'Acción / Aventura', 'PC, PlayStation, Xbox', 2018, 'Rockstar Games', '4.9', 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=500&q=80'),
('Super Mario Odyssey', 'Acompaña a Mario en una aventura tridimensional para rescatar a la Princesa Peach.', 'Plataformas', 'Nintendo Switch', 2017, 'Nintendo', '4.8', 'https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=500&q=80'),
('Fortnite', 'Un juego de batalla campal gratuito con construcción y constantes colaboraciones.', 'Battle Royale', 'PC, Consolas, Mobile', 2017, 'Epic Games', '4.2', 'https://images.unsplash.com/photo-1589241062272-c0a000072dfa?w=500&q=80'),
('The Witcher 3: Wild Hunt', 'Geralt de Rivia busca a la niña de la profecía en un mundo devastado.', 'RPG', 'PC, PlayStation, Xbox, Switch', 2015, 'CD Projekt Red', '4.9', 'https://images.unsplash.com/photo-1563089145-599997674d42?w=500&q=80'),
('Valorant', 'Juego de disparos táctico 5v5 basado en personajes únicos y habilidades.', 'FPS Táctico', 'PC', 2020, 'Riot Games', '4.4', 'https://images.unsplash.com/photo-1542751110-97427bbecf20?w=500&q=80'),
('Stardew Valley', 'Hereda la vieja parcela de tu abuelo y transforma el terreno en una próspera granja.', 'Simulación / RPG', 'PC, Consolas, Mobile', 2016, 'ConcernedApe', '4.8', 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=500&q=80'),
('Portal 2', 'Aventuras y acertijos basados en físicas avanzadas utilizando la pistola de portales.', 'Acertijos / Puzzle', 'PC, Xbox, PlayStation', 2011, 'Valve', '4.9', 'https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=500&q=80'),
('Apex Legends', 'Battle royale de escuadrones con héroes con habilidades únicas compitiendo por la gloria.', 'Battle Royale / FPS', 'PC, Consolas', 2019, 'Respawn Entertainment', '4.5', 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=500&q=80');

-- Inserción de registros confidenciales simulados para el laboratorio
INSERT INTO admin_notes (note, internal_code) VALUES
('CLAVE_DB_RESPALDO: local_admin_pass_2026!', 'CONFIDENTIAL_DB_KEY_01'),
('SERVIDOR_SSH: 192.168.1.100 - USER: root_vault', 'INTERNAL_NET_NOTE_02'),
('TOKEN_API_PAGOS: sk_test_51Mz9821839812938129', 'PAYMENT_GATEWAY_TOKEN'),
('REVISION_SEGURIDAD: Recordar actualizar el backend antes de pasar a producción.', 'AUDIT_FLAG_99');