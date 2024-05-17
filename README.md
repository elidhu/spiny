# Spiny

Introducing "Spiny," a minimalist [Zola](https://www.getzola.org) theme.

> Originally inspired by [Anemone](https://github.com/Speyll/anemone) for the template. It is now however, very different and specific for my needs - you may find it useful too.

<!-- You can browse the demo website [here](https://spiny.pages.dev/) -->
<!-- I also use it on my own [website](https://elidhu.com). -->

Spiny is a versatile Zola theme that is backed by tailwindcss. It will switch between light and dark themes based on the user's system preference.

## Installation

To get started with Spiny, follow these simple steps:

1. Download the theme to your `themes` directory:

```bash
cd themes
git clone https://github.com/elidhu/spiny
```

2. Enable Spiny in your `config.toml`:

```toml
theme = "Spiny"
```

## Release Notes

...

## Options

Spiny provides various options to customize your website:

#### Default Taxonomies

To use tags, add the following code to a page's metadata:

```toml
[taxonomies]
tags = ["tag1", "tag2"]
```

#### Pages List in Homepage

Enable listing of pages in the homepage by adding the following code to `config.toml`:

```toml
[extra]
list_pages = true
```

#### Add Table of Contents (TOC) to Pages

In a page's frontmatter, set `extra.toc` to `true`:

```toml
[extra]
toc = true
```

#### Display Author Name in Articles

Customize the display of the author's name in your articles by toggling the `display_author` variable to either `true` or `false`:

```toml
[extra]
display_author = true
```


### Extra Data

- Set the `author` in both the main config and in pages metadata.
- Use the `image` variable in pages to add an image to HTML `<meta>` tags.
- Similarly, set `favicon` in the main config, and it will be used as the site icon.


### License

The Spiny theme is available as open source under the terms of the [MIT License](LICENSE).
