/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

# ------------------------------------------------------------
# SCHEMA DUMP FOR TABLE: authors
# ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `authors` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 26 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

# ------------------------------------------------------------
# SCHEMA DUMP FOR TABLE: books
# ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `books` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `pages` int NOT NULL,
  `year` int NOT NULL,
  `imgUrl` varchar(255) NOT NULL,
  `clicks` int NOT NULL,
  `deleted` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 30 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

# ------------------------------------------------------------
# SCHEMA DUMP FOR TABLE: books_authors
# ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `books_authors` (
  `author_id` int NOT NULL,
  `book_id` int NOT NULL,
  `deleted` tinyint(1) NOT NULL DEFAULT '0'
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

# ------------------------------------------------------------
# DATA DUMP FOR TABLE: authors
# ------------------------------------------------------------

INSERT INTO
  `authors` (`id`, `name`)
VALUES
  (1, 'Андрей Богуславский');
INSERT INTO
  `authors` (`id`, `name`)
VALUES
  (2, 'Дрю Нейл');
INSERT INTO
  `authors` (`id`, `name`)
VALUES
  (3, 'Доктор Хаус');
INSERT INTO
  `authors` (`id`, `name`)
VALUES
  (4, 'Том Хренсберг');
INSERT INTO
  `authors` (`id`, `name`)
VALUES
  (5, 'Василий Умный');
INSERT INTO
  `authors` (`id`, `name`)
VALUES
  (6, 'Дональд Трамп');
INSERT INTO
  `authors` (`id`, `name`)
VALUES
  (7, 'Лиза Шаварока');
INSERT INTO
  `authors` (`id`, `name`)
VALUES
  (8, 'Джон');
INSERT INTO
  `authors` (`id`, `name`)
VALUES
  (9, 'Роман Шмелев');
INSERT INTO
  `authors` (`id`, `name`)
VALUES
  (10, 'Павел Шавленков');
INSERT INTO
  `authors` (`id`, `name`)
VALUES
  (11, 'Вадим Бабаев');
INSERT INTO
  `authors` (`id`, `name`)
VALUES
  (12, 'Виктория Гречука');
INSERT INTO
  `authors` (`id`, `name`)
VALUES
  (13, 'Дмитрий Карауш');
INSERT INTO
  `authors` (`id`, `name`)
VALUES
  (14, 'Владимир Непути');
INSERT INTO
  `authors` (`id`, `name`)
VALUES
  (15, 'Любовь Александровна');
INSERT INTO
  `authors` (`id`, `name`)
VALUES
  (16, 'Артур Морган');
INSERT INTO
  `authors` (`id`, `name`)
VALUES
  (17, 'Кирилл Сударь');
INSERT INTO
  `authors` (`id`, `name`)
VALUES
  (18, 'Тим Кедлек');
INSERT INTO
  `authors` (`id`, `name`)
VALUES
  (19, 'Котик');
INSERT INTO
  `authors` (`id`, `name`)
VALUES
  (20, 'Энтони Грей');
INSERT INTO
  `authors` (`id`, `name`)
VALUES
  (21, 'Люк Веллинг');
INSERT INTO
  `authors` (`id`, `name`)
VALUES
  (22, 'Никита Скворцов');
INSERT INTO
  `authors` (`id`, `name`)
VALUES
  (23, 'Олег Смирнов');
INSERT INTO
  `authors` (`id`, `name`)
VALUES
  (24, 'Карлсон');
INSERT INTO
  `authors` (`id`, `name`)
VALUES
  (25, 'Богдан Гришин');

# ------------------------------------------------------------
# DATA DUMP FOR TABLE: books
# ------------------------------------------------------------

INSERT INTO
  `books` (
    `id`,
    `name`,
    `pages`,
    `year`,
    `imgUrl`,
    `clicks`,
    `deleted`
  )
VALUES
  (
    1,
    'СИ++ И КОМПЬЮТЕРНАЯ ГРАФИКА',
    100,
    2020,
    './images/1.jpg',
    2,
    0
  );
INSERT INTO
  `books` (
    `id`,
    `name`,
    `pages`,
    `year`,
    `imgUrl`,
    `clicks`,
    `deleted`
  )
VALUES
  (
    3,
    'Толковый словарь сетевых терминов и аббревиатур',
    123,
    2222,
    './images/3.jpg',
    0,
    0
  );
INSERT INTO
  `books` (
    `id`,
    `name`,
    `pages`,
    `year`,
    `imgUrl`,
    `clicks`,
    `deleted`
  )
VALUES
  (
    4,
    'Python for Data Analysis',
    101,
    2019,
    './images/4.jpg',
    0,
    0
  );
INSERT INTO
  `books` (
    `id`,
    `name`,
    `pages`,
    `year`,
    `imgUrl`,
    `clicks`,
    `deleted`
  )
VALUES
  (
    5,
    'Thinking in Java (4th Edition)',
    1005,
    2023,
    './images/5.jpg',
    0,
    0
  );
INSERT INTO
  `books` (
    `id`,
    `name`,
    `pages`,
    `year`,
    `imgUrl`,
    `clicks`,
    `deleted`
  )
VALUES
  (
    6,
    'Introduction to Algorithms',
    110,
    2021,
    './images/6.jpg',
    0,
    0
  );
INSERT INTO
  `books` (
    `id`,
    `name`,
    `pages`,
    `year`,
    `imgUrl`,
    `clicks`,
    `deleted`
  )
VALUES
  (
    7,
    'JavaScript Pocket Reference',
    1030,
    2034,
    './images/7.jpg',
    2,
    1
  );
INSERT INTO
  `books` (
    `id`,
    `name`,
    `pages`,
    `year`,
    `imgUrl`,
    `clicks`,
    `deleted`
  )
VALUES
  (
    8,
    'Adaptive Code via C#: Class and Interface Design, Design Patterns, and SOLID Principles',
    100,
    2020,
    './images/8.jpg',
    0,
    0
  );
INSERT INTO
  `books` (
    `id`,
    `name`,
    `pages`,
    `year`,
    `imgUrl`,
    `clicks`,
    `deleted`
  )
VALUES
  (
    9,
    'SQL: The Complete Referenc',
    100,
    2020,
    './images/9.jpg',
    0,
    0
  );
INSERT INTO
  `books` (
    `id`,
    `name`,
    `pages`,
    `year`,
    `imgUrl`,
    `clicks`,
    `deleted`
  )
VALUES
  (
    10,
    'PHP and MySQL Web Development',
    99,
    1990,
    './images/10.jpg',
    0,
    0
  );
INSERT INTO
  `books` (
    `id`,
    `name`,
    `pages`,
    `year`,
    `imgUrl`,
    `clicks`,
    `deleted`
  )
VALUES
  (
    11,
    'Статистический анализ и визуализация данных с помощью R',
    100,
    2020,
    './images/11.jpg',
    0,
    0
  );
INSERT INTO
  `books` (
    `id`,
    `name`,
    `pages`,
    `year`,
    `imgUrl`,
    `clicks`,
    `deleted`
  )
VALUES
  (
    12,
    'Computer Coding for Kid',
    43,
    2005,
    './images/12.jpg',
    0,
    0
  );
INSERT INTO
  `books` (
    `id`,
    `name`,
    `pages`,
    `year`,
    `imgUrl`,
    `clicks`,
    `deleted`
  )
VALUES
  (
    13,
    'Exploring Arduino: Tools and Techniques for Engineering Wizardry',
    100,
    2020,
    './images/13.jpg',
    0,
    0
  );
INSERT INTO
  `books` (
    `id`,
    `name`,
    `pages`,
    `year`,
    `imgUrl`,
    `clicks`,
    `deleted`
  )
VALUES
  (
    14,
    'Программирование микроконтроллеров для начинающих и не только',
    100,
    2020,
    './images/14.jpg',
    0,
    0
  );
INSERT INTO
  `books` (
    `id`,
    `name`,
    `pages`,
    `year`,
    `imgUrl`,
    `clicks`,
    `deleted`
  )
VALUES
  (
    15,
    'The Internet of Things',
    100,
    2020,
    './images/15.jpg',
    0,
    0
  );
INSERT INTO
  `books` (
    `id`,
    `name`,
    `pages`,
    `year`,
    `imgUrl`,
    `clicks`,
    `deleted`
  )
VALUES
  (
    16,
    'Sketching User Experiences: The Workbook',
    100,
    2020,
    './images/16.jpg',
    1,
    0
  );
INSERT INTO
  `books` (
    `id`,
    `name`,
    `pages`,
    `year`,
    `imgUrl`,
    `clicks`,
    `deleted`
  )
VALUES
  (17, 'InDesign CS6', 100, 2020, './images/17.jpg', 0, 0);
INSERT INTO
  `books` (
    `id`,
    `name`,
    `pages`,
    `year`,
    `imgUrl`,
    `clicks`,
    `deleted`
  )
VALUES
  (
    18,
    'Адаптивный дизайн. Делаем сайты для любых устройств',
    100,
    2020,
    './images/18.jpg',
    0,
    0
  );
INSERT INTO
  `books` (
    `id`,
    `name`,
    `pages`,
    `year`,
    `imgUrl`,
    `clicks`,
    `deleted`
  )
VALUES
  (
    19,
    'Android для разработчиков',
    100,
    2020,
    './images/19.jpg',
    0,
    0
  );
INSERT INTO
  `books` (
    `id`,
    `name`,
    `pages`,
    `year`,
    `imgUrl`,
    `clicks`,
    `deleted`
  )
VALUES
  (
    20,
    'Clean Code: A Handbook of Agile Software Craftsmanship',
    100,
    2020,
    './images/20.jpg',
    0,
    0
  );
INSERT INTO
  `books` (
    `id`,
    `name`,
    `pages`,
    `year`,
    `imgUrl`,
    `clicks`,
    `deleted`
  )
VALUES
  (
    21,
    'Swift Pocket Reference: Programming for iOS and OS X',
    100,
    2020,
    './images/21.jpg',
    0,
    0
  );
INSERT INTO
  `books` (
    `id`,
    `name`,
    `pages`,
    `year`,
    `imgUrl`,
    `clicks`,
    `deleted`
  )
VALUES
  (
    22,
    'NoSQL Distilled: A Brief Guide to the Emerging World of Polyglot Persistence',
    100,
    2020,
    './images/22.jpg',
    0,
    0
  );
INSERT INTO
  `books` (
    `id`,
    `name`,
    `pages`,
    `year`,
    `imgUrl`,
    `clicks`,
    `deleted`
  )
VALUES
  (
    23,
    'Head First Ruby',
    100,
    2020,
    './images/23.jpg',
    0,
    0
  );
INSERT INTO
  `books` (
    `id`,
    `name`,
    `pages`,
    `year`,
    `imgUrl`,
    `clicks`,
    `deleted`
  )
VALUES
  (
    24,
    'Practical Vim',
    100,
    2020,
    './images/24.jpg',
    0,
    0
  );
INSERT INTO
  `books` (
    `id`,
    `name`,
    `pages`,
    `year`,
    `imgUrl`,
    `clicks`,
    `deleted`
  )
VALUES
  (
    26,
    'Успеть до восхода',
    100,
    2020,
    './images/1644264030278--Успеть-до-восхода.png',
    1,
    0
  );
INSERT INTO
  `books` (
    `id`,
    `name`,
    `pages`,
    `year`,
    `imgUrl`,
    `clicks`,
    `deleted`
  )
VALUES
  (
    27,
    'Пособие',
    55,
    2000,
    './images/1644265247493--Без названия.jfif',
    0,
    0
  );
INSERT INTO
  `books` (
    `id`,
    `name`,
    `pages`,
    `year`,
    `imgUrl`,
    `clicks`,
    `deleted`
  )
VALUES
  (
    28,
    'екунек',
    123,
    2000,
    './images/1644265565945--image.jfif',
    0,
    0
  );
INSERT INTO
  `books` (
    `id`,
    `name`,
    `pages`,
    `year`,
    `imgUrl`,
    `clicks`,
    `deleted`
  )
VALUES
  (
    29,
    'Изучаем Node.JS вместе!',
    500,
    2022,
    './images/1644266311309--c68b2f11656a455084ce7f178477e701.jpg',
    0,
    0
  );

# ------------------------------------------------------------
# DATA DUMP FOR TABLE: books_authors
# ------------------------------------------------------------

INSERT INTO
  `books_authors` (`author_id`, `book_id`, `deleted`)
VALUES
  (2, 1, 0);
INSERT INTO
  `books_authors` (`author_id`, `book_id`, `deleted`)
VALUES
  (3, 3, 0);
INSERT INTO
  `books_authors` (`author_id`, `book_id`, `deleted`)
VALUES
  (7, 4, 0);
INSERT INTO
  `books_authors` (`author_id`, `book_id`, `deleted`)
VALUES
  (6, 5, 0);
INSERT INTO
  `books_authors` (`author_id`, `book_id`, `deleted`)
VALUES
  (8, 6, 0);
INSERT INTO
  `books_authors` (`author_id`, `book_id`, `deleted`)
VALUES
  (9, 7, 1);
INSERT INTO
  `books_authors` (`author_id`, `book_id`, `deleted`)
VALUES
  (4, 8, 0);
INSERT INTO
  `books_authors` (`author_id`, `book_id`, `deleted`)
VALUES
  (13, 9, 0);
INSERT INTO
  `books_authors` (`author_id`, `book_id`, `deleted`)
VALUES
  (12, 10, 0);
INSERT INTO
  `books_authors` (`author_id`, `book_id`, `deleted`)
VALUES
  (18, 11, 0);
INSERT INTO
  `books_authors` (`author_id`, `book_id`, `deleted`)
VALUES
  (17, 12, 0);
INSERT INTO
  `books_authors` (`author_id`, `book_id`, `deleted`)
VALUES
  (15, 13, 0);
INSERT INTO
  `books_authors` (`author_id`, `book_id`, `deleted`)
VALUES
  (16, 14, 0);
INSERT INTO
  `books_authors` (`author_id`, `book_id`, `deleted`)
VALUES
  (19, 15, 0);
INSERT INTO
  `books_authors` (`author_id`, `book_id`, `deleted`)
VALUES
  (20, 16, 0);
INSERT INTO
  `books_authors` (`author_id`, `book_id`, `deleted`)
VALUES
  (24, 17, 0);
INSERT INTO
  `books_authors` (`author_id`, `book_id`, `deleted`)
VALUES
  (23, 18, 0);
INSERT INTO
  `books_authors` (`author_id`, `book_id`, `deleted`)
VALUES
  (22, 19, 0);
INSERT INTO
  `books_authors` (`author_id`, `book_id`, `deleted`)
VALUES
  (21, 20, 0);
INSERT INTO
  `books_authors` (`author_id`, `book_id`, `deleted`)
VALUES
  (11, 21, 0);
INSERT INTO
  `books_authors` (`author_id`, `book_id`, `deleted`)
VALUES
  (5, 22, 0);
INSERT INTO
  `books_authors` (`author_id`, `book_id`, `deleted`)
VALUES
  (10, 23, 0);
INSERT INTO
  `books_authors` (`author_id`, `book_id`, `deleted`)
VALUES
  (14, 24, 0);
INSERT INTO
  `books_authors` (`author_id`, `book_id`, `deleted`)
VALUES
  (24, 26, 0);
INSERT INTO
  `books_authors` (`author_id`, `book_id`, `deleted`)
VALUES
  (8, 27, 0);
INSERT INTO
  `books_authors` (`author_id`, `book_id`, `deleted`)
VALUES
  (3, 28, 0);
INSERT INTO
  `books_authors` (`author_id`, `book_id`, `deleted`)
VALUES
  (25, 29, 0);

/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
