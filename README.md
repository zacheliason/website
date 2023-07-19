# Zach Eliason Website

This website is built using `Vue.js` and is hosted on GitHub Pages. It is a simple static website I built to highlight some of my projects, visual design, and resume.

I've heard good things about frameworks such as `Svelte` (and even prefer its performance build-side design), but I chose `Vue.js` because it was familiar and I want to spend more of my time on projects and content than the frameworks I use to display them.

## Project Structure
Because I wanted to focus my time on writing, I wrote the script `update_website.sh` to wrap all processes necessary whenever I make changes or add new content. 

### Quarto
[Quarto]() is an authoring tool similar to RMarkdown which I prefer for its Python compatibility. I use it to write my blog posts and then use the script `render_quartos.py` to convert them to markdown files which are then rendered by Vue. 


```bash
#!/usr/bin/env zsh

cd ~/Documents/website/zacheliason_dot_com/

python3 render_quartos.py

bash git.sh
echo "git committed"
npm run build
sleep 20
echo "dist built"

ls dist/images/*
cp -R dist/* /Users/zacheliason/Documents/website/zacheliason.github.io

cd /Users/zacheliason/Documents/website/zacheliason.github.io
sleep .2
bash git.sh
sleep 2
echo "git committed"
echo "update complete"
```

## Project setup
```
npm install
npm run build
```