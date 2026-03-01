---
title: Приватная запись
cover: images/Cat03.jpg
coverAlt: Тестовое изображение
description: Пример использования всех компонентов для работы с изображениями и файлами из S3
publishedAt: 2026-02-27
tags:
  - музыка
  - инструменты
  - задачи
---

# Приватная запись

Эта статья демонстрирует все компоненты для работы с изображениями и файлами из S3 хранилища.

## Изображения в Markdown

Изображения автоматически оптимизируются через Nuxt Image:

:prose-image{src="images/Cat03.jpg"}

Также можно использовать относительные пути:

![Изображение по относительному пути](/img/placeholder.png)

## Иконки с фоном

Иконки используются как placeholder с цветным фоном:

:icon{color="sage" name="lucide:image" size="md"}

:icon{color="rose" name="lucide:file" size="lg"}

:icon{color="lavender" name="lucide:download" size="xl"}

## Кнопка скачивания

Для скачивания файлов из S3 используйте компонент Download:

:prose-download{button-text="Скачать pdf" filename="Пользовательское соглашение.pdf" src="privacy-policy.pdf"}

## Аудио плеер

Воспроизведение аудиофайлов из S3:

:prose-player{src="music/test.mp3"}
