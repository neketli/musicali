---
title: 'Тестирование компонентов NuxtHub S3'
description: 'Пример использования всех компонентов для работы с изображениями и файлами из S3'
cover: 'images/Cat03.jpg'
coverAlt: 'Тестовое изображение'
publishedAt: '2026-02-27'
tags: ['музыка', 'инструменты', 'задачи']
---

# Тестирование компонентов для работы с S3

Эта статья демонстрирует все компоненты для работы с изображениями и файлами из S3 хранилища.

## Изображения в Markdown

Изображения автоматически оптимизируются через Nuxt Image:


::ProseImage
---
src: images/Cat03.jpg
---
::

Также можно использовать относительные пути:

![Изображение по относительному пути](/img/placeholder.png)

## Иконки с фоном

Иконки используются как placeholder с цветным фоном:

::Icon
---
name: lucide:image
size: md
color: sage
---
::

::Icon
---
name: lucide:file
size: lg
color: rose
---
::

::Icon
---
name: lucide:download
size: xl
color: lavender
---
::


## Кнопка скачивания

Для скачивания файлов из S3 используйте компонент Download:

::ProseDownload
---
src: 'privacy-policy.pdf'
buttonText: 'Скачать pdf'
filename: 'Пользовательское соглашение.pdf'
---
::

## Аудио плеер

Воспроизведение аудиофайлов из S3:

::ProsePlayer
---
src: music/test.mp3
---
::
